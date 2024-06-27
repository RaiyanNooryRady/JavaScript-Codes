
function plusone(n) { return n + 1; }
function plusI(n, i) { return n + i; }
function constant() { return 42; }
var map = function(arr, fn) {
    console.log(fn);
    const newArr=[];
    if(fn===plusone){
        console.log('skd');
        for(const value of arr){
            newArr.push(plusone(value));
        }

    }
    else if(fn===plusI){
        for(let i=0;i<arr.length;i++){
            newArr.push(plusI(arr[i],i));
        }
    }
    else{
        for(const value of arr){
            newArr.push(constant(value));
        }
    }
    return newArr;
    
};

let array =[1,2,3];
let func= plusI;
console.log(map(array,func));
