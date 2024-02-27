import { Children } from 'react';
import './App.css';

interface Props {
    classString: string;
  }

function Box(props: Props){
    return (
        <div className={props.classString}> Box </div>
    );
}

export default Box;