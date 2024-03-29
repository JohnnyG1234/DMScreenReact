import React, {useState} from 'react';
import './App.css';

interface Props {
    buttonString: string;
    textContent: any;
    header: string;
  }

function PopUp(props: Props){

    const [popUp, setPopUp] = useState(false);

    const togglePopUp = () =>{
        setPopUp(!popUp)
    }

    return (
        <>
            <button className='button' onClick={togglePopUp}>
            {props.buttonString}
            </button>

            {popUp && (
                <div className='popUp'>
                <div onClick={togglePopUp} className='overlay'></div>
                <div className='popUpContent'>
                    <h2> {props.header} </h2>
                    <p>
                    {props.textContent}
                    </p>
                    <button className='button'
                    onClick={togglePopUp}> 
                    Close </button>
                </div>
            </div>
            )}
            
        </>
    );
}

export default PopUp;