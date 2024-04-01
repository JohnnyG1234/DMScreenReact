import { Children } from 'react';
import './App.css';

function PageHeaderBox(){
    return (
        <div className="PageHeader navBarFlex">
            <h2>Digital DM Screen</h2>
            <a href="https://github.com/JohnnyG1234/DMScreenReact"> Github </a>
            <a href="https://chartopia.d12dev.com/"> Chartopia </a>
            <a href="https://www.linkedin.com/in/johngroton/"> Me! </a>
        </div>
    );
}

export default PageHeaderBox;