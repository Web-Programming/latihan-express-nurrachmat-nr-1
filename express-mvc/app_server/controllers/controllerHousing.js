const Housing = require("../models/housing");

const Index = async (req,res) => {
    try {
        const housing = await Housing.find({});
        res.status(200).json(housing);
        if(!housing){
            res.status(400).json({message: "Collection is Empty"})
        }
    } catch (error) {
        res.status(500).json({ message: "Error retrieving users", error});
    }
}
const Show = async (req,res) => {
    try {
        const housing = await Housing.findById(req.params.id)
        res.status(200).json(housing);
        if(!housing){
            res.status(400).json({message: "Collection is Empty"})
        }
    } catch (error) {
        res.status(500).json({ message: "Error retrieving housing", error});
    }
}
module.exports = { Index, Show }