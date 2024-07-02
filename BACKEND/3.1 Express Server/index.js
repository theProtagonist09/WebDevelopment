import exp from "express";
const app=exp();
const port=3000;

app.listen(port,()=>{
    console.log(`hey Mrinal,Server Running on port no. ${port}.`);
})