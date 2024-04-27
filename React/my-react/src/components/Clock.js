import React from "react";
//class component: its stateful
class Clock extends React.Component{

    // constructor(props){
    //     super(props);
    //     this.state={date:new Date()};
    // }
    state={date:new Date()};
    componentDidMount(){
        this.clockTimer=setInterval(()=>this.tick(),1000);
    }
    componentWillUnmount(){
        clearInterval(this.clockTimer);
    }
    tick(){
        this.setState({date: new Date()});
    }
    render(){

        return (
            //state holo component er vitorer data change kora. state is a javascript object. React.component er ekta property
            <h1 className="heading">
                <span className="text">Hello {this.props.children}{ this.state.date.toLocaleTimeString(this.props.locale)}</span> <br/>
                <span className={this.props.className}>second is {this.state.date.getSeconds()}</span>
            </h1>
        );
    }
}
export default Clock;