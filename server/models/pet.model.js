const mongoose = require ('mongoose');

const PetsSchema = new mongoose.Schema ({
    name: {
        type:String,
        required:[true, "Name is required"],
        minLength: [3, "Pet Name must be at least 3 characters"]
    },
    type: {
        type:String,
        required:[true, "If you don't know what it is, how will I?"],
        minLength: [3, "Pet Type must be at least 3 characters"]
    },
    description: {
        type:String,
        required:[true, "Tell me a little something about this little fella"],
        minLength: [3, "Descriptions must be at least 3 characters"]
    },
    skill: {
        type:String,
        
    },
    skill2: {
        type:String,
        
    }
}, {timestamps:true});

const Pets = mongoose.model ('Pets', PetsSchema);

module.exports = Pets;