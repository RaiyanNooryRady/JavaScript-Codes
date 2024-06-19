class parent{
    constructor(){
        console.log('constructor from parent');
    }
    helloP(){
        console.log('hello from parent');
    }
    helloModify(){
        console.log('this is parent class function');
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
    //Method overriding
    helloModify(){
        console.log('this is parent class function but modified from child class');
    }
    //use parent method from child method
    Demo(){
        super.helloP();
    }

}

let objChild= new child();

objChild.Demo();
objChild.helloC();
objChild.helloP();
objChild.helloModify();