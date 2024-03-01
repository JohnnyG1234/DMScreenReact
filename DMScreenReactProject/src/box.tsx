import { Children } from 'react';
import './App.css';

interface Props {
    classString: string;
    textContent: string;
  }

function Box(props: Props){
    return (
        <div className={props.classString}> {props.textContent} </div>
    );
}

export default Box;