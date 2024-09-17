import { race_dict } from "../races.js";

function getRace(race, name, home){
    if(!name && !home){
        try{
            return race_dict[race];
        }
        catch(err){
            console.log(err);
            return {error: "Internal Server Error"};
        }
        
    }
    else{
        try{
            if(name && !home){
                const jsonFormat = race_dict[race];
                const inner_response = jsonFormat[race];
                let isHere = 0;
                let answer = "";
                for(let i=0;i<Object.keys(inner_response).length;i++){
                    if(inner_response[i].name === name){
                        isHere = 1;
                        answer = inner_response[i];
                        break;
                    }
                }

                if(isHere === 1){
                    return answer;
                }
                else{
                    if(race === "dwarves"){
                        return {
                            status: 404,
                            error: "Not Found",
                            message: `Your dwarf not here :(`
                        };
                    }
                    else if(race === "elves"){
                        return {
                            status: 404,
                            error: "Not Found",
                            message: `Your elf not here :(`
                        };
                    }
                    else{
                        return {
                            status: 404,
                            error: "Not Found",
                            message: `Your ${race.slice(0,race.length-1)} not here :(`
                        };
                    }
                }
            }
            else if(!name && home){
                const jsonFormat = race_dict[race];
                const response = jsonFormat[race];
                let citizens_arr = [];
                for(let i=0;i<response.length;i++){
                    if(response[i].home === home){
                        citizens_arr.push(response[i]);
                    }
                }
                // console.log(citizens_arr);
                if(citizens_arr.length > 0){
                    return citizens_arr;
                }
                else{

                    return {
                        status: 404,
                        error: "Not Found",
                        message: `The home you're looking for not here :(`
                    };
                }
                
            }
            
        }

        catch(err){
            console.log(err);
            return {error: "Internal Server Error"};
        }
    
    }
}

export default getRace;