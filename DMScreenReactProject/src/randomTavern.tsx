import React, {useState} from "react";
import PopUp from "./popUpText";

const API_ROOT = "https://chartopia.d12dev.com";
const tavernID = 26936;

function RandomTavern(){

    const [data, setData] = useState(null);
    const [showPopUp, setPopUp] = useState(false);

    const togglePopUp = () => {
        setPopUp(!showPopUp);
    }

    const getData = ()  =>{ 
        setData(null);

        fetch(`${API_ROOT}/api/charts/${tavernID}/roll/`
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
            let stringArray = data.results;
            console.log(stringArray);

            stringArray = stringArray[0].split("\n")
            let newString = stringArray[0]
            newString = newString.replace("<u>", "");
            newString = newString.replace("</u>", "");
            


            return newString;
        }  
        else
        {
            console.log("Data is null :(");
        }
    }

    return(
        <>
            <div className="d square">
                <h2>Random Taven</h2>
                {data ? <pre>{parseData()}</pre> : 'Loading...'}
                <button className="button" onClick={getData}>Get Tavern!</button>
            </div>
        </>
    )


}

export default RandomTavern;