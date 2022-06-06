// const person = {
//     name: "Joseph Mugwaneza",
//     age: 29,
//     passion: "Programming"
// }

// module.exports = person;

class Person{
    constructor(name, age, passion){
        this.name = name;
        this.age = age;
        this.passion = passion;
    }

    greeting(){
        console.log(`My name is ${this.name} and I am ${this.age} yeas old`);
    }
};

module.exports = Person;