import React, { useState, useEffect } from 'react';
import './App.css';

const API_ROOT = "https://chartopia.d12dev.com";

const npcChartId = 42627;


function RandomNpc(){
    const [data, setData] = useState(null);
    const [showButton, setShow] = useState(false);

    // Call funcion on page load
    // https://stackoverflow.com/questions/63193114/how-do-i-call-a-function-automatically-when-page-loads-up-in-react-js-in-2020
    useEffect(() => {
        let ignore = false;
        
        if (!ignore)  getData();
        return () => { ignore = true; }
        },[]);

    const getData = () => {
        setData(null);
        setShow(false);

        fetch(`${API_ROOT}/api/charts/${npcChartId}/roll/`
        ,{
            method: 'POST',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
    },
        })
          .then(response => response.json())
          .then(json => setData(json))
          .catch(error => console.error(error));
    }

    const parseData = () => {
        if (data != null)
        {
            console.log(data);
            const stringArray = data.results[0].split("\n");
            console.log(stringArray);
            let newString = ""
            if (stringArray[13] != "Traits:")
            {
                newString = stringArray[1] + "\n " + stringArray[3] + "\n" + stringArray[5] + "\n" + stringArray[7] + "\n" + stringArray[13] + "\n" + stringArray[29];
            }
            else
            {
                newString = stringArray[1] + "\n " + stringArray[3] + "\n" + stringArray[5] + "\n" + stringArray[7] + "\n" + stringArray[11] + "\n" + stringArray[25];
            }
            
            setShow(true);
            return newString;
        }  
        else
        {
            console.log("Data is null :(");
        }
    }


    return(
        <>
            <div className="g square">
                <h2>Random NPC</h2>
                {data ? <pre>{parseData()}</pre> : 'Loading...'}
                {showButton && (
                    <button onClick={getData} className='button'> Get NPC! </button>
                )}   
            </div>
        </>
    )
}

export default RandomNpc;