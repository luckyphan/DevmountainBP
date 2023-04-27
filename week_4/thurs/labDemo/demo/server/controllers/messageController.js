const bcrypt = require("bcryptjs");
let chats = [];
//someone sends message, create an object with the message, 
//uses different pin for messages, messages with same pin shares the object else create new object
//send messages to the front, 
module.exports = {
    createMessage : (req,res) => {
        console.log(req.body)
        //destructure
        const {pin , message} = req.body;
        //check if pin exists
        chats.forEach(element => {
            // if(element.pin === +pin){
                const existing = bcrypt.compareSync(pin,element.pinHash)
            if(existing){
                element.pin.messages.push(message);
                let messagesToReturn = {...element}
                delete messagesToReturn.pinHash
                res.status(200).send(element)
                return;
                
            }
        });
        //hash goes updates file with pinhash, never store pw of pin, just the hash
        const salt = bcrypt.genSaltSync(10);
        const pinHash = bcrypt.hashSync(pin,salt);
        const newObj = {
            pinHash,
            messages:[message],
        };



        chats.push(newObj);
        //copy of it newobj
        let messagesToReturn = {...newObj}
        delete messagesToReturn.pinHash;
        console.log(chats);
        res.status(200).send(messagesToReturn);
    }
}