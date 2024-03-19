import { Children } from 'react';
import React, { useState, useEffect } from 'react';
import './App.css';

const API_ROOT = "https://chartopia.d12dev.com";
const chartId = 51482;



function LootTable() {
    const [data, setData] = useState(null);

    // Generate table button onClick function
    useEffect(() => {
        fetch(`${API_ROOT}/api/charts/${chartId}/roll/`
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
      }, []);

      

    return(
        <>
            <div className="f square">
                <button className='button'>
                    Get Loot!
                </button>
            
                <div className='root'>
                    {data ? <pre>{JSON.stringify(data.results[0], null, 2)}</pre> : 'Loading...'}
                </div>
            </div>
        </>
    );

}

export default LootTable;