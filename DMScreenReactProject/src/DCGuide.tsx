import { Children } from 'react';
import './App.css';

function DCGuide(){
    return (
        <> 
        <div className="c square">
          <h2>DC Guide</h2>
          <table className='table'>
            <tr>
              <th>Task Difficulty</th>
              <th>DC</th>
            </tr>

            <div className='tableLine'></div>
            
            <tr>
              <th>Very Easy</th>
              <th>5</th>
            </tr>

            <tr>
              <th>Easy</th>
              <th>10</th>
            </tr>

            <tr>
              <th>Medium</th>
              <th>15</th>
            </tr>

            <tr>
              <th>Hard</th>
              <th>20</th>
            </tr>

            <tr>
              <th>Very Hard</th>
              <th>25</th>
            </tr>

            <tr>
              <th>Nearly Impossible</th>
              <th>30</th>
            </tr>
            </table>
          </div>  
        </>
    );
}

export default DCGuide;