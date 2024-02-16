import { Children } from 'react';
import './App.css';
import PageHeaderText from './PageHeaderText';

function PageHeaderBox(){
    return (
        <>
            <div className='PageHeader'>Digital DM Screen</div>
            <PageHeaderText classString='navBarOne PageHeaderText' textContent='H'></PageHeaderText>
            <PageHeaderText classString='navBarTwo PageHeaderText' textContent='H'></PageHeaderText>
            <PageHeaderText classString='navBarThree PageHeaderText' textContent='H'></PageHeaderText>
        </>   
    );
}

export default PageHeaderBox;