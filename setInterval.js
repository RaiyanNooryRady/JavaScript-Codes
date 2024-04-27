function trick() {
    let x = document.getElementById('root');
    let y = new Date().toLocaleTimeString();
    console.log(y);
    x.innerHTML = `Hello The time is ${y}`;
}
trick();
setInterval(trick, 1000);

function loop(){
    let x=document.getElementById('demo');
    let y=`Hello World ${new Date().getSeconds()}`
    x.innerHTML=`demo value is ${y}`;
}
setInterval(loop,1000);