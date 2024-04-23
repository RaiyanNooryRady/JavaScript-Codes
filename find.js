let arr=[1,1,2,45,53,34,55,43];
let x= arr.find(function(value,index,arr){
    return value>30;
},this);
console.log(x);
let ind = arr.findIndex(function(value,index,arr){
    return !(value%2);
});
console.log(ind);
class student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    
    show(){
        console.log(`student name is ${this.name} and student age is ${this.age}`);
    }

    example(){
        let numbers=[234,4,43,35,34];
        // numbers.find(function(){
        //     this.show();
        // },this);
        numbers.find(()=>{
            this.show();
        });
    }
}
let raiyan= new student('Raiyan',25);
raiyan.example();