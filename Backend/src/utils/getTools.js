import { race_dict } from "../races.js";
import {isTool} from "../controllers/toolFinder.js"

function getTools(name){
    try {
        const raceKeys = Object.keys(race_dict);
        let tools_arr = [];

        if (!name) {
            for (let i = 0; i < raceKeys.length; i++) {
                const jsonFormat = race_dict[raceKeys[i]];
                const inner_data = jsonFormat[raceKeys[i]];
                for (let j = 0; j < inner_data.length; j++) {
                    if (inner_data[j].tools != undefined) {
                        tools_arr.push(inner_data[j].tools);
                    }
                }
            }
            return tools_arr;
        } else {
            if (isTool(name)) {
                for (let i = 0; i < raceKeys.length; i++) {
                    const jsonFormat = race_dict[raceKeys[i]];
                    const inner_data = jsonFormat[raceKeys[i]];
                    for (let j = 0; j < inner_data.length; j++) {
                        if (inner_data[j].tools != undefined) {
                            const all_tools = inner_data[j].tools;
                            for (let a = 0; a < all_tools.length; a++) {
                                if (all_tools[a].name === name) {
                                    tools_arr.push(all_tools[a]);
                                }
                            }
                        }
                    }
                }
                return tools_arr;
            } else {

                return {
                    status: 404,
                    error: "Not Found",
                    message: `No tool found with the name '${name}'`
                };
            }
        }
    } catch (err) {
        console.log(err);
        return { error: "Internal Server Error" };
    }
}

export default getTools;