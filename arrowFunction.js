//normal function
// function add(x,y){
//     return x+y;
// }

//es6
let add= (x,y)=> x+y;

console.log(add(10,5));

let javascript={
    name:'javascript',
    libraries:["react","vue","angular"],
    printLibraries: function(){
        //console.log(this);
        //let self=this;
        // self.libraries.forEach(function(library){
        //     //console.log(this);
        //     console.log(`${self.name} loves ${library}`);
        // });
        //here this={javascript}
        this.libraries.forEach((library)=> console.log(`${this.name} loves ${library}`));
    }
}
javascript.printLibraries();