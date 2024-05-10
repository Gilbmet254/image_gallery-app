import photos from "./photos.js"
import express from "express"
import mongodb from "mongodb"
import mongoose from "mongoose"
const port = 5001
const app = express()

app.use(express.urlencoded({extende:true}))
mongoose.connect("mongodb+srv://gilbmet254:26eGENn6bWfqeXoZ@cluster0.dr199yi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{

})
const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error"))
db.once("open", function(){
    console.log("database running")
})
app.get("/",(req,res)=>{
    res.send("Hello world")
})
app.post("/post",(req,res)=>{
    const newPost = new photos({
        imageurl:req.body.imageurl
    })
    newPost.save()
})
app.listen(port,()=>{
    console.log("server running")
})