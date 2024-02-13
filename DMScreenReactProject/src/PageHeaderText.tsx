import './App.css';
import React from 'react';

// Define the prop types for the component
interface Props {
    textContent: string;
  }


// Define the functional component
const PageHeaderText: React.FC<Props> = ({ textContent }) => {
    return (
      <div>{textContent}</div>
    );
  };

export default PageHeaderText;