let x;
function trick() {
    let x = document.getElementById('root');
    let y = new Date().toLocaleTimeString();
    console.log(y);
    root.innerHTML = `Hello The time is ${y}`;
}
trick();
setInterval(trick, 1000);