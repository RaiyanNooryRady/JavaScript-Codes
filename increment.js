const domContainer = document.querySelector("#root");

// const myElement = React.createElement("div",null,[
//     React.createElement("p", null, "hello tension"),
//     React.createElement("h", null, "hello no tension"),
// ]);
const style = {
    color: 'black',
    fontSize: '50px',
    textAlign: 'center',
    
};
const buttonStyle = {
    fontSize:'50px',
    color:'white',
    backgroundColor:'blue',
    padding:'20px',
    borderRadius:'10px',
    cursor: 'pointer'
}
const Increment = ()=>{
    const [counter, setCounter]= React.useState(0);
    //console.log(counter,setCounter);
    console.log(React.useState(0));
    return(
        <div style={style}>
        <h1 id="display">{counter}</h1>
        <div>
            <button id="button" onClick={()=> setCounter(counter+1)} style={buttonStyle}>Like</button>
        </div>
    </div>
    );
};
// const myElement=(
    
//     <div style={style}>
//         <h1 id="display">0</h1>
//         <div>
//             <button id="button" style={buttonStyle}>increment++</button>
//         </div>
//     </div>
// );

 ReactDOM.render(
 <div className="container">
    <Increment />
    <Increment />
    <Increment />
 </div>,
domContainer
);

//  const button= document.querySelector('#button');
//  const display=document.querySelector('#display');
//  let displayVal=0;
//  button.addEventListener('click',()=>{
//     displayVal++;
//     display.textContent=displayVal;
//     //display.innerHTML=displayVal; (same as last line)
//  })