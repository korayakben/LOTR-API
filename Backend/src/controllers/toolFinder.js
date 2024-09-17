import { race_dict } from "../races.js";

export function isTool(tool){
    try{
        const raceKeys = Object.keys(race_dict);
        let counter = 0;
        for(let i=0;i<raceKeys.length;i++){
            const jsonFormat = race_dict[raceKeys[i]];
            const inner_data = jsonFormat[raceKeys[i]];
            for(let j=0;j<inner_data.length;j++){
                if(inner_data[j].tools != undefined){
                    const all_tools = inner_data[j].tools;
                    for(let a=0;a<all_tools.length;a++){
                        // console.log(all_tools[a]);
                        if(all_tools[a].name === tool){
                            counter = 1;
                        }
                    }
                }
                
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