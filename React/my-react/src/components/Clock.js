import React from "react";
import Button from "./Button";
//class component: its stateful
class Clock extends React.Component {

    // constructor(props){
    //     super(props);
    //     this.state={date:new Date(),locale:"bn-BD"};
    //     this.handleClick=this.handleClick.bind(this);

    // }
    state = { date: new Date(),locale:"bn-BD" };
    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }
    tick() {
        this.setState({ date: new Date() });
    }
    handleClick= (locale)=>{
        // e.preventDefault();
       // alert('hello');
    //    console.log(this);
       this.setState({locale});
    }
    render() {
        //console.log('clock component udpated');
        const { date,locale } = this.state;
        // let button;
        // if(locale==='bn-BD'){
        //     button= <Button change={this.handleClick} locale="en-US"> Click Here </Button>;
        // }
        // else{
        //     button= <Button change={this.handleClick} locale="bn-BD"> Click Here </Button>
        // }
        return (
            //state holo component er vitorer data change kora. state is a javascript object. React.component er ekta property
            <div>
                <h1 className="heading">

                    {/* <span className="text">Hello {this.props.children}{ this.state.date.toLocaleTimeString(this.props.locale)}</span> <br/> */}
                    <span className="text">{date.toLocaleTimeString(locale)}</span>
                    {/* <span className={this.props.className}>second is {date.getSeconds()}</span> */}

                </h1>
                {/* <button type="button" onClick={this.handleClick.bind(this,"en-US")}>Click Here</button> */}
                {/* <Button change={this.handleClick} locale="en-US"> Click Here </Button> */}
                {/* {button} <br/><br/> */}
                {locale==='bn-BD'?<Button change={this.handleClick} locale="en-US" show={false} />:<Button change={this.handleClick} locale="bn-BD" show />}
            </div>
        );
    }
}
export default Clock;