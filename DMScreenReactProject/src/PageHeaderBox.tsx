import { Children } from 'react';
import './App.css';
import PageHeaderText from './PageHeaderText';

function PageHeaderBox(){
    return (
        <div className='PageHeaderBox'>
            Digital DM Screen
            <ul>
               <li> <PageHeaderBox></PageHeaderBox> </li>
               <li></li>
               <li></li>
            </ul>
        </div>
    );
}

export default PageHeaderBox;