export const sendMessage = async (req, res) => {

try {
    const {message} = req.body;
    const{id: receiverId } = req.params;
    const {senderId} = req.user._id;
    
} catch (error) {
    console.log("Error In Message Controller,",error );
    res.status(500).json({error: "Internal Server Error"});
}
}