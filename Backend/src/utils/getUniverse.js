import { race_dict } from "../races.js";
import { isBearer } from "../controllers/ringBearer.js";
import { findGender } from "../controllers/findGender.js";

function getUniverse(ring_bearer, gender){
    try{
        if(!ring_bearer && !gender){
            try{
                const raceKeys = Object.keys(race_dict);
                const universe = [];
                for(let i=0;i<raceKeys.length;i++){
                    universe.push(race_dict[raceKeys[i]]);
                }
                return universe;
            }
            catch(err){
                console.log(err);
                return {error: "Internal Server Error"};
            }
        }
        else if(ring_bearer && !gender){
            try{
               if(ring_bearer === 'true'){
                return isBearer(true);        
            }  
            else if(ring_bearer === 'false'){
                return isBearer(false);
            } 
            else{
                return {
                    status: 400,
                    error: "Bad Request",
                    message: "Invalid value for 'ring_bearer'. Must be 'true' or 'false'."
                };
            }
            }

            catch(err){
                console.log(err);
                return {error: "Internal Server Error"};
            }
        }

        else if(!ring_bearer && gender){
            try{
               if(gender === 'male' || gender === 'female'){
                return findGender(gender);
               }
               else{
                return {
                    status: 400,
                    error: "Bad Request",
                    message: "Invalid value for 'gender'. Must be 'male' or 'female'."
                };
               }
            }

            catch(err){
                console.log(err);
                return {error: "Internal Server Error"};
            }         
        }

        else if(ring_bearer && gender){
            try{
                if(ring_bearer === 'true' || ring_bearer === 'false'){

                    if(gender === 'male' || gender === 'female'){
                        if(ring_bearer === 'true'){
                            const ring_bearers_arr = isBearer(true);
                            const arr = [];
                            for(let i=0;i<ring_bearers_arr.length;i++){
                                if(ring_bearers_arr[i].gender === gender){
                                    arr.push(ring_bearers_arr[i]);
                                }
                            }
                            return arr;
                        }
                        else if(ring_bearer === 'false'){
                            const ring_bearers_arr = isBearer(false);
                            const arr = [];
                            for(let i=0;i<ring_bearers_arr.length;i++){
                                if(ring_bearers_arr[i].gender === gender){
                                    arr.push(ring_bearers_arr[i]);
                                }
                            }
                            return arr;
                        }
                    }

                    else{
                        return {
                            status: 400,
                            error: "Bad Request",
                            message: "Invalid value for 'gender'. Must be 'male' or 'female'."
                        };
                    }

                    
                }

                else{

                    return {
                        status: 400,
                        error: "Bad Request",
                        message: "Invalid value for 'ring_bearer'. Must be 'true' or 'false'."
                    };
                }
    
            }

            catch(err){
                console.log(err);
                return {error: "Internal Server Error"};
            }
            }
        
    }
    catch(err){
        console.log(err);
        return {error: "Internal Server Error"};
    }
}


export default getUniverse;