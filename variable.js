let x=10;
//let x=20; not possible as cannot be redeclared
var y=10;
var y=20; //possible as var can be redeclared
console.log(x,y);

{
    let x=20; 
    let y=30;
    console.log(x,y);////possible as this x,y are in local scope
}
console.log(x,y); //this are global x,y