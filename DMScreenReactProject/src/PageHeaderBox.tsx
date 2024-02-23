import { Children } from 'react';
import './App.css';
import PageHeaderText from './PageHeaderText';
import HyperLink from './HyperLink';

function PageHeaderBox(){
    return (
        <>
            <h2 onClick={() => {alert("bruh");}} className='PageHeader'>Digital DM Screen</h2>
            <HyperLink classString='navBarOne PageHeaderText hyperLinkButton' linkString='https://github.com/JohnnyG1234/DMScreenReact' textContent='Github'></HyperLink>
            <HyperLink classString='navBarTwo PageHeaderText hyperLinkButton' linkString='https://github.com/JohnnyG1234/DMScreenReact' textContent='Github'></HyperLink>
            <HyperLink classString='navBarThree PageHeaderText hyperLinkButton' linkString='https://github.com/JohnnyG1234/DMScreenReact' textContent='Github'></HyperLink>
            <div className='navBarBorderBox'></div>
        </>   
    );
}

export default PageHeaderBox;