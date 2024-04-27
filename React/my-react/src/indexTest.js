import React from 'react';
import ReactDOM from 'react-dom';

//const element= React.createElement('h1',null,'Hello, World');


// setInterval(()=>{
//   const index = 0;
//   const element = (
//     <h1 id="hello" className='headings' tabIndex={index}>
//       <div>Hello {new Date().toLocaleTimeString()}</div>
//       <img src='https://img.freepik.com/free-photo/vibrant-colors-nature-close-up-wet-purple-daisy-generated-by-artificial-intellingence_25030-63819.jpg' alt='web-img'/>
//     </h1>);
//   ReactDOM.render(element, document.getElementById('root'));
// },1000);
/*
element ={
  type:h1,
  props:{
    className:'heading',
    children: [
    {
      type:span,
      props: 'Hello 11 world'
    },
    {
      type:'img',
      src:''
    }
  ]
  }
}


*/

function getGreetings(user) {
  if (user) {
    return <h1>Hello {user}</h1>;
  }
  else
    return <h1>Hello stranger</h1>;
}
// const element2 = <h1>Hello {getGreetings('Raiyan')} </h1>
// console.log(element, element2);
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

function name(userName) {
  return userName.firstName + ' ' + userName.lastName;
}
const user = {
  firstName: 'Farhan',
  lastName: 'Ahmed'
}
const element =
  <div>
    <h1>Hello {name(user)}</h1>
    <h2>{getGreetings(name(user))}</h2>
  </div>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
