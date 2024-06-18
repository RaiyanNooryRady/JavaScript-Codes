let x=10,glob=90;
//let x=20; not possible as let cannot be redeclared
var y=10;
var y=20; //possible as var can be redeclared
const z=50;
//const z= 60; not possible as const cannot be redeclared
//z=30; not possible as const cannot be reassigned
console.log(x,y,z);

{
    let x=20; 
    var y=30;
    const z=60;
    console.log(x,y,z,glob);//these x,y,z are in local scope and glob is global variable
}
console.log(x,y); //this are global x,y