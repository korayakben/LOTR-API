import express from "express";
import bodyParser from "body-parser";   
import { dirname, join } from "path";        
import { fileURLToPath } from "url"; 
import cors from "cors";
import { isRace } from "./controllers/raceFinder.js";
import { apiLimiter } from "./middlewares/rateLimiter.js";
import getUniverse from "./utils/getUniverse.js";
import getRandomRace from "./utils/getRandomRace.js";
import getQuotes from "./utils/getQuotes.js";
import getTools from "./utils/getTools.js";
import getRace from "./utils/getRace.js";


const app = express();
app.use(cors());  //CORS POLICIES ARE ADDED!!!
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, 'public')));

//Setting EJS as View engine
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

 // Implement it to every /api/v1 paths
 app.use('/api/v1', apiLimiter);


//GET all 
app.get("/api/v1/",(req , res)=>{
    res.json(getUniverse());
});

//GET all //RING_BEARER-GENDER OR BOTH
app.get("/api/v1/universe",(req , res)=>{
        const ring_bearer = req.query.ring_bearer;
        const gender = req.query.gender;
        res.json(getUniverse(ring_bearer, gender));
});

//1. GET a random race
app.get("/api/v1/random",(req , res)=>{
    res.json(getRandomRace());
      
});

//2. GET datas by filtering on the quotes  
app.get("/api/v1/quotes",(req , res)=>{
    res.json(getQuotes());
});

//3. GET datas by filtering on the tools NAME QUERY
app.get("/api/v1/tools", (req, res) => {
    const name = req.query.name;
    res.json(getTools(name));
});

//4. GET a specific race parameter + NAME QUERY AND HOME QUERY
app.get("/api/v1/:race",(req , res)=>{
        try{
            const race = req.params.race;
            if(isRace(req.params.race))
            {
                const name = req.query.name;
                const home = req.query.home;
                res.json(getRace(race, name, home));
            }
            else{
                res.status(404).json({
                    status: 404,
                    error: "Not Found",
                    message: `No race found with the name '${race}'`  
                });
            } 
        }

        catch(err){
            console.log(err);
            res.status(500).json({error: "Internal Server Error"});
        }
    }
);


const port = 3000;
app.listen(port , ()=>{
    console.log(`Listening port ${port}...`);
});