import React from "react";
import ReactDOM from "react-dom/client";

//functional component: it's not stateful
// function Clock({locale,className}) {

//     return (
//         <h1 className="heading">
//             <span className="text">Hello {new Date().toLocaleTimeString(locale)}</span> <br/>
//             <span className={className}>second is {new Date().getSeconds(locale)}</span>
//         </h1>
//     );// react element

// }//react component
//function= react component, it returns react element

// //class component: its stateful
// class Clock extends React.Component{

//     render(){

//         return (
//             <h1 className="heading">
//                 <span className="text">Hello {this.props.children}{ new Date().toLocaleTimeString(this.props.locale)}</span> <br/>
//                 <span className={this.props.className}>second is {new Date().getSeconds()}</span>
//             </h1>
//         );
//     }
// }
// // const ClockComponent= new Clock();

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Clock locale="bn-BD" className="hello"> World </Clock>);

function Welcome(props){
    return(
      <div>
        <h1 className={props.classN}>Hello {props.name} {props.children}</h1>
      </div>
    );
  }
  
  function App(){
    return (
      <div>
        <Welcome name="raiyan" classN="rn"> is my name </Welcome>
        <Welcome name="daiyan" classN="dn"> is my brother's name </Welcome>
        <Welcome name="Kabila" classN="kn"> is my sister's name </Welcome>
        <Welcome name="Jasiya" classN="jn"> is my sister's name </Welcome>
      </div>
    );
  }
  
  const root=ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);