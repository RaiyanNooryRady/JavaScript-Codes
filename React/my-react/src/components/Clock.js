import React from "react";
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
export default Clock;