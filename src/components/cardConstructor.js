class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const quinton = new Person("Quinton");

quinton.introduce(); 
export {Person}