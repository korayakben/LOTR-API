import { race_dict } from "../races.js";

export function isRace(race){
    try{
        const raceKeys = Object.keys(race_dict);
        let counter = 0;
        for(let i=0;i<raceKeys.length;i++){
            if(raceKeys[i] === race){
                counter = 1;
                break;
            }
        }

        if(counter === 1){
            return true;
        }
        else{
            return false;
        }
    }
    catch(err){
        console.log(err);
    } 
}