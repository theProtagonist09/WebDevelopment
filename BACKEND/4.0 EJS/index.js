import express from "express";
import bodyParser from "body-parser"; 
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

const d = new Date("30 June,2024");
let day = d.getDay();

app.use(bodyParser.urlencoded({extended:true}));

if(day===0|| day===6){
    app.get("/", (req, res) => {
        res.render(__dirname + "/views/index.ejs",{
            output:"This is fucking weekend, naacho bc"
        });
      });
}else{
    app.get("/", (req, res) => {
        res.render(__dirname + "/views/index.ejs",{
            output:"This is weekday,serious rho"
        });
      });
}

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
