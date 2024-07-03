import express from "express";
//added code
import bodyParser from "body-parser"; //added
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
//

const app = express();
const port = 3000;
var bandName=""; //added code


app.use(bodyParser.urlencoded({extended:true}));

//added code

function bandNameGenerator(req,res,next){
  console.log(req.body);
  bandName=req.body["street"]+req.body["pet"];
  next();
}

app.use(bandNameGenerator);
//

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

//added
app.post("/submit",(req,res)=>{
  res.send(`<h1>Your band name is:</h1> <h2>${bandName}</h2>`);
})
//

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
