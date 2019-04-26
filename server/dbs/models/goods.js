import mongoose from "mongoose"
const Schema = mongoose.Schema

const GoodsSchema = new Schema({
    gname: {
        type:String,
        required:true,
    },
    desc: {
        type:String,
        required: true
    },
    imgs: {
        type:Array,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    sale_price: {
        type: Number,
        required: true
    },
    postage: {
        type: Number,
        required: true
    },
    original_price: {
        type: Number
    },
    type: {
        type: Array,
        required: true
    }
})

export default mongoose.model("Goods", GoodsSchema)