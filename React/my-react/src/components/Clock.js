import React from "react";
//class component: its stateful
class Clock extends React.Component {

    // constructor(props){
    //     super(props);
    //     this.state={date:new Date()};
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
    handleClick(e){
        // e.preventDefault();
       // alert('hello');
       this.setState({locale:"en-US"})
    }
    render() {

        const { date,locale } = this.state;

        return (
            //state holo component er vitorer data change kora. state is a javascript object. React.component er ekta property
            <div>
                <h1 className="heading">

                    {/* <span className="text">Hello {this.props.children}{ this.state.date.toLocaleTimeString(this.props.locale)}</span> <br/> */}
                    <span className="text">{date.toLocaleTimeString(locale)}</span>
                    <span className={this.props.className}>second is {date.getSeconds()}</span>

                </h1>
                <button type="button" onClick={this.handleClick}>Click Here</button>
            </div>
        );
    }
}
export default Clock;