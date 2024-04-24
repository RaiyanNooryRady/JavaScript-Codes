function myF(a,b,c,...args){
    console.log(a,b,c);
    console.log(args);
    console.log(arguments);
}
myF('a','b','c',1,3,2,4,5,6);