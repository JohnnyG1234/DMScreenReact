import './App.css';
import React from 'react';

import './App.css';

// Define the prop types for the component
interface Props {
    textContent: string;
    classString: string;
  }


// Define the functional component
const PageHeaderText: React.FC<Props> = ({ textContent, classString }) => {
    return (
      <div className={classString}>{textContent}</div>
    );
  };

export default PageHeaderText;