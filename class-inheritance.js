class parent{
    constructor(){
        console.log('constructor from parent');
    }
    helloP(){
        console.log('hello from parent');
    }
}
class child extends parent{

    constructor(){
        super();
        console.log('constructor from child');
    }
    helloC(){
        console.log('hello from child');
    }
}

let objChild= new child();

objChild.helloC();
objChild.helloP();