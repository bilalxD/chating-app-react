import Conversation from "../models/conversation.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {

try {
    const {messages} = req.body;
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
        messages,
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
        const {id: receiverChat} = req.body;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {$all: [senderId,receiverId]}.populate("messages");
        })
        res.status(200).json(conversation.messages;)
    } catch (error) {
        console.log("Error In sendMessage Controller,",error );
    res.status(500).json({error: "Internal Server Error"});
    }
}