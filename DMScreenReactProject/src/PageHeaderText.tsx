import './App.css';
import React from 'react';

import './App.css';

// Define the prop types for the component
interface Props {
    textContent: string;
  }


// Define the functional component
const PageHeaderText: React.FC<Props> = ({ textContent }) => {
    return (
      <div className='PageHeaderText'>{textContent}</div>
    );
  };

export default PageHeaderText;