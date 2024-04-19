const domContainer = document.querySelector("#root");

const myElement = React.createElement("div",null,[
    React.createElement("p", null, "hello tension"),
    React.createElement("p", null, "hello no tension"),
]);

ReactDOM.render(myElement, domContainer);