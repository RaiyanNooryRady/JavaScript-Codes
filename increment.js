const domContainer = document.querySelector("#root");

// const myElement = React.createElement("div",null,[
//     React.createElement("p", null, "hello tension"),
//     React.createElement("h", null, "hello no tension"),
// ]);
const style = {
    color: 'black',
    fontSize: '50px',
    textAlign: 'center',
    margin: '200px'
};
const buttonStyle = {
    fontSize:'50px',
    color:'white',
    backgroundColor:'blue',
    padding:'20px',
    borderRadius:'10px',
    cursor: 'pointer'
}
const myElement=(
    
    <div style={style}>
        <h1 id="display">0</h1>
        <div>
            <button id="button" style={buttonStyle}>increment++</button>
        </div>
    </div>
);
 ReactDOM.render(myElement, domContainer);
 const button= document.querySelector('#button');
 const display=document.querySelector('#display');
 let displayVal=0;
 button.addEventListener('click',()=>{
    displayVal++;
    display.innerHTML=displayVal;
 })