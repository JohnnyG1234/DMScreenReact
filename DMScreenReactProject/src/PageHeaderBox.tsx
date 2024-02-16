import { Children } from 'react';
import './App.css';
import PageHeaderText from './PageHeaderText';

function PageHeaderBox(){
    return (
        <div className='PageHeaderBox'>
            <PageHeaderText textContent='H'></PageHeaderText>
            <PageHeaderText textContent='H'></PageHeaderText>
            <PageHeaderText textContent='H'></PageHeaderText>
        </div>
    );
}

export default PageHeaderBox;