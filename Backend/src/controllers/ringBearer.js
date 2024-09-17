import { race_dict } from "../races.js";

export function isBearer(res){
    try{
        const raceKeys = Object.keys(race_dict);
        let ring_bearers_arr = [];
        for(let i=0;i<raceKeys.length;i++){
            const universe = race_dict[raceKeys[i]];
            const inner_race = universe[raceKeys[i]];
            for(let j=0;j<inner_race.length;j++){
                if(inner_race[j].ring_bearer === res){
                    ring_bearers_arr.push(inner_race[j]);
                }
            }
        }

        // console.log(ring_bearers_arr);
        // res.status(200).json(ring_bearers_arr);
        return ring_bearers_arr;
    }

    catch(err){
        console.log(err);
    }           
}