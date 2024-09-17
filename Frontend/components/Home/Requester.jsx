import React, { useEffect, useState } from 'react'
import "../../public/styles.css"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from "axios";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';


function Requester() {
    const [hintValue, setHintValue] = useState("universe");
    const [response, setResponse] = useState("");
    const URL = `http://localhost:3000/api/v1/${hintValue}`;
    const [copiedMessage, setCopiedMessage] = useState("");
    const [displayType, setDisplayType] = useState("none");

    function handleClick(event) {
        event.preventDefault();
        setHintValue(event.target.innerText);
    }

    function handleChange(event) {
        event.preventDefault();
        setHintValue(event.target.value);
    }

    async function sendRequest() {
        console.log(URL);
        try {
            const request = await axios.get(URL);
            setResponse(JSON.stringify(request.data, null, 2));
        } catch (error) {
            console.error("Error fetching data:", error);
            setResponse("Too many requests, please try again later. (25 requests in 3 mins)");
        }
    }


    async function handleCopyClipboard(){
        try {
            await navigator.clipboard.writeText(`${URL}`);
            setCopiedMessage("Copied to clipboard!");
            setDisplayType("inline");
            setTimeout(()=>{
                setDisplayType("none");
            },2000);
          } catch (err) {
            setCopiedMessage("Failed to copy the text!");
            console.error('An error occured while copying the text: ', err);
          }
    }

    return (
        <div style={{fontFamily: "serif"}}>
            <a className='doc-view' href="/docs" target='_blank'>Click here to see the Documentation</a>
            <div className='requester-header' id="requester-header">
                REQUESTER
                <hr style={{ width: "240px", backgroundColor: "#000", marginTop: "0.3rem", marginLeft: "-0.2rem" }} />
            </div>
            <div className='hint-container'>
                <div className='hints'>
                    Need a hint? Try
                    <div onClick={handleClick}>
                        <a href="#">random</a>
                        <a href="#">universe</a>
                        <a href="#">universe?ring_bearer=true</a>
                        <a href="#">universe?gender=female</a>
                        <a href="#">quotes</a>
                        <a href="#">tools</a>
                        <a href="#">tools?name=Axe of Gimli</a>
                        <a href="#">hobbits</a>
                        <a href="#">hobbits?name=Samwise Gamgee</a>
                        <a href="#">hobbits?home=Anduin River</a>
                    </div>
                </div>
            </div>


            <div className='copy-container' style={{display: displayType}}>
                
                <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" sx={{width:"200px"}}>{copiedMessage}</Alert>
               
            </div>

            <div className='requester-container'>
                <div className='requester-input'>

                    <div className='url-input-div'>
                    <div id="url-div">http://localhost:3000/api/v1/</div>


<TextField id="outlined-basic" label={hintValue} variant="outlined" InputProps={{ style: { borderRadius: '0px', height:"3.45rem" } }} onChange={handleChange} />
                    </div>



                    <Button id="copy-btn" variant="contained" sx={{ borderRadius: "0" }} onClick={handleCopyClipboard}>
                        <img src="../public/icons/copy.png" alt="copy" style={{ width: "65%" }} />
                    </Button>



                    <Button href="#response-title" id="send-btn" sx={{ borderRadius: "0 3px 3px 0", boxShadow: "none",
                         fontFamily:"serif"
                     }} variant="contained" onClick={sendRequest}>Send Request</Button>


                </div>

                <a className='doc-view' href={URL} target='_blank' id="new-tab-btn">You can click here to view response in a new tab.</a>

                <pre className='response-container'>
                    
                    <div className='response-title' id="response-title">
                        Response
                        <hr style={{ width: "240px", marginTop: "0.2rem", backgroundColor: "#000" }} />
                    </div>

                    <pre className='response-div' id="showup-response">
                        {response}
                        
                    </pre>
                </pre>

            </div>
        </div>
    )
}

export default Requester;
