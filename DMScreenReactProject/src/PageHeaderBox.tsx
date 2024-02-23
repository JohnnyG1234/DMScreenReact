import { Children } from 'react';
import './App.css';
import PageHeaderText from './PageHeaderText';
import HyperLink from './HyperLink';

function PageHeaderBox(){
    return (
        <>
            <h2 className='PageHeader'>Digital DM Screen</h2>
            <HyperLink classString='navBarOne PageHeaderText' linkString='https://github.com/JohnnyG1234/DMScreenReact' textContent='Github'></HyperLink>
            <PageHeaderText classString='navBarTwo PageHeaderText' textContent='H'></PageHeaderText>
            <PageHeaderText classString='navBarThree PageHeaderText' textContent='H'></PageHeaderText>
            <div className='navBarBorderBox'></div>
        </>   
    );
}

export default PageHeaderBox;