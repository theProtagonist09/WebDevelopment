import exp from "express";

const app=exp();
const port=3000;

//code for handle get req
app.get("/",(req,res)=>{
    res.send("<h1>Hello Shogun</h1>");
    // console.log(req.rawHeaders);
})

app.get("/about",(req,res)=>{
    res.send("<h1>About me</h1><p>I am btech student</p>");
})

app.get("/contact",(req,res)=>{
    res.send("<h1>Contact me</h1> <p>My no. is 456789</p>");
})

app.listen(port, ()=>{
    console.log("Hey Levi, port running on "+port);
})