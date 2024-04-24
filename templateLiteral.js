let x=4;
let y=2;
function modifier(strings,...values){
    // console.log(strings);
    // console.log(values);
    const m= strings.reduce((prevVal,currentVal)=>{
        return prevVal+currentVal+(values.length?"value "+values.shift():"");
    },"");
    //console.log(m);
    return m;
}
console.log(modifier `the addition of ${x} and ${y} is ${x+y} and 
subtraction is ${x-y} and
multiplication is ${x*y} and
division is ${x/y} and then finish.`);