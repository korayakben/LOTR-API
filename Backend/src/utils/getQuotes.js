import { race_dict } from "../races.js";

function getQuotes(){
    try{
        const raceKeys = Object.keys(race_dict);
        let quotes_arr = [];
        for(let i=0;i<Object.keys(race_dict).length;i++){
            const jsonFormat = race_dict[raceKeys[i]];
            const inner_response = jsonFormat[raceKeys[i]];
            // console.log(inner_response);
            for(let j=0;j<inner_response.length;j++){
                if(inner_response[j].quotes != undefined){
                    quotes_arr.push(inner_response[j].quotes);
                }
            }
        }
        return quotes_arr;
    }

    catch(err){
        console.log(err);
        return {error: "Internal Server Error"};
    }
}

export default getQuotes;