import Conversation from "../models/conversation.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {

try {
    const {message} = req.body;
    const{id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
        participants: {$all: [senderId,receiverId]},
    });
    if(!conversation){
        conversation = await Conversation.create({
            participants:[senderId,receiverId],
        })
    };
    const newMessages = new Message({
        senderId,
        receiverId,
        message,
    });
    if (newMessages) {
        conversation.messages.push(newMessages._id); 
    };
    await Promise.all([conversation.save(), newMessages.save()]);
    
    res.status(201).json(newMessages);
} catch (error) {
    console.log("Error In sendMessage Controller,",error );
    res.status(500).json({error: "Internal Server Error"});
}
}


export const getMessage = async (req,res) =>{
    try {
        const {id: receiverChat} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {$all: [senderId,receiverChat]}
        }).populate("messages");
        if(!conversation){
            return res.status(404).json([]);
        }
        const messages = conversation.messages;
        res.status(200).json(messages)
    } catch (error) {
        console.log("Error In Get Message Controller,",error );
    res.status(500).json({error: "Internal Server Error"});
    }
}