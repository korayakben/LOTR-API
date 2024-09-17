import { race_dict } from "../races.js";

function getRandomRace(){
    try{
        const raceKeys = Object.keys(race_dict);
        const randomIndex = Math.floor(Math.random()*(raceKeys.length));
        return race_dict[raceKeys[randomIndex]];
    }
    catch(err){
        console.log(err);
        return {error: "Internal Server Error"};
    }
}

export default getRandomRace;