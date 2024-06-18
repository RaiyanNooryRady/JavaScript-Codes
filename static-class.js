class myClass{
    constructor(){
        console.log('constructor');
    }
    hello(){
        console.log('hello world');
    }
    static sm(){
        console.log('this is static method');
    }
}
let obj= new myClass();
obj.hello();
myClass.sm();