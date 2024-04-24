let number=[3,4,5];
let numbers=[...number,1,8,4,9,20]; //... spreads the elements of number array
console.log(numbers);

let a=number;
number.push(4,3); //I changed number array
console.log(a); //a also changed! see output

let b=[...number]; //now separate, but exact copy of number array is created
number.push(9,84,5); //b will not be changed.
console.log('array b is: ',b);
console.log('number array is: ',number);

let x=34;
let y=x;
x=24;
console.log('Value for x and y is ',x, y);

let p=[1,2,3];
let q=[4,5,6];
let r=[7,8,9];
let s=['a','b','c'];
let t=[...p,...q,...r,...s]; //concatanation
//let t=p.concat(q,r,s); same output as previous line
console.log('the array t is: ', t);

let obj1={
    x:1,
    y:2,
};
let obj2={
    z:3,
    a:4
};
let obj3={
    ...obj1,
    ...obj2,
    b:9,
    c:8
}
console.log(obj3);