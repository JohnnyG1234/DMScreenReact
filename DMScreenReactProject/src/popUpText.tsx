import React, {useState} from 'react';
import './App.css';

function PopUp(){

    const [popUp, setPopUp] = useState(false);

    const togglePopUp = () =>{
        setPopUp(!popUp)
    }

    return (
        <>
            <button onClick={togglePopUp}>
                Open
            </button>

            {popUp && (
                <div className='popUp'>
                <div onClick={togglePopUp} className='overlay'></div>
                <div className='popUpContent'>
                    <h2> Deafened </h2>
                    <p>
                    A deafened creature can’t hear and automatically 
                    fails any ability check that requires hearing.
                    </p>
                    <button
                    onClick={togglePopUp}> 
                    Close </button>
                </div>
            </div>
            )}
            
        </>
    );
}

export default PopUp;