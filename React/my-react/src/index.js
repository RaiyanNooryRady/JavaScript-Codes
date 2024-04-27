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

//class component: its stateful
class Clock extends React.Component{

    render(){

        return (
            <h1 className="heading">
                <span className="text">Hello {this.props.children}{ new Date().toLocaleTimeString(this.props.locale)}</span> <br/>
                <span className={this.props.className}>second is {new Date().getSeconds()}</span>
            </h1>
        );
    }
}
// const ClockComponent= new Clock();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Clock locale="bn-BD" className="hello"> World </Clock>);
