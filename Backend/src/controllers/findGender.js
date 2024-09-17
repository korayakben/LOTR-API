import { race_dict } from "../races.js";

export function findGender(gender){
    const raceKeys = Object.keys(race_dict);
    const gender_arr = [];
    for(let i=0;i<raceKeys.length;i++){
        const universe = race_dict[raceKeys[i]];
        const inner_data = universe[raceKeys[i]]; //All in arr
        for(let j=0;j<inner_data.length;j++){
            // console.log(inner_data[j]); //All in the same line
            if(inner_data[j].gender === gender){
                gender_arr.push(inner_data[j]);
            }
        }
    }

    return gender_arr;
}