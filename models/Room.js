import mongoose from  'mongoose';
const Schema = mongoose.Schema,
    Types = mongoose.Schema.Types,
    modelName = 'Room';

const roomSchema = new Schema({
    name:{
        type: Types.String,
        required: true
    },
    startDate : {
        type: Types.Number,
        default: Math.round((new Date(null)).getTime() / 1000)
    },
    stopDate : {
        type: Types.Number,
        default: Math.round((new Date(null)).getTime() / 1000)
    },
    occupied:{
        type:Types.Boolean,
        required:true
    }
})

export const Room = mongoose.model(modelName, roomSchema);