const express = require("express");
const app = express();
const mongoose = require("mongoose");

 const MONGO_URL = "mongodb://127.0.0.1:27017/Travel";

 main()
.then(()=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
});

 async function main() {
    await mongoose.connect(MONGO_URL);
}

 app.get("/",(req,res)=>{
     res.send("hi, i am root");
});

app.get("/demouser",async(req,res)=>{
    let fakeUser = new User({
        email:"jayfinaviya3@gmail.com",
        username:"delta-student",
    });

    let registeredUser = await User.register(fakeUser,"helloworld");
    res.send(registeredUser);
});

app.listen(8080,()=>{
    console.log("server is listening to port 8080");
});