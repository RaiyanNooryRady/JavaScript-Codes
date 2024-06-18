class student{
    x=5;
    y=25;
    constructor(name,age){
        console.log('constructing');
        console.log(name+ " "+ age);
    }
    myF(...params) {
        console.log(params);
    }
}
let obj=new student('rady',25);
obj.myF(1,2,3,4,5);
console.log(obj.x);