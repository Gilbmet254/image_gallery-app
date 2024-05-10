import  mongoose from "mongoose"
const schemer = new mongoose.Schema({
    imageurl: String,
})
const photos = mongoose.model("photos", schemer)
export default photos