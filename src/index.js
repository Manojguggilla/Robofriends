import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';


// import Hello from './Hello';
import 'tachyons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  //  <div>
  //   <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
  //   <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
  //   <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
  //   <Card id={robots[3].id} name={robots[3].name} email={robots[3].email}/>
  //  </div>
   
   
    
   <App/>
  

 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
