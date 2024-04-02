import React, {useState, useEffect} from "react";
import PopUp from "./popUpText";

const API_ROOT = "https://chartopia.d12dev.com";
const tavernID = 26936;

function RandomTavern(){

    const [data, setData] = useState(null);


    useEffect(() => {
        let ignore = false;
        
        if (!ignore)  getData();
        return () => { ignore = true; }
        },[]);

    const cutStar = (word: string) => {
        for (let i = 0; i < 4; i++)
            {
                word = word.replace("*", "");
            }
        return word;
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

            stringArray = stringArray[0].split("\n");

            let tavernName = stringArray[0];
            tavernName = tavernName.replace("<u>", "");
            tavernName = tavernName.replace("</u>", "");

            let Ambiance = stringArray[5];
            Ambiance = cutStar(Ambiance);

            let barkeep = stringArray[6];
            barkeep = cutStar(barkeep);

            let prices = stringArray[9]
            prices = cutStar(prices);

            const finalString = tavernName + "\n" + Ambiance + "\n" + barkeep + "\n" + prices;

            return finalString;
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