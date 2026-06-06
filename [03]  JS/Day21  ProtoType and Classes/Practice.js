//  ProtoType and classes'

const obj = {
    name : "Amit",
    age : 19,
    greet: function(){
        console.log("Ram Ram Ji");
        
    }
}
// console.log(obj.greet());
// obj.greet();

const obj2 = {
    account: 30,
}
obj2.__proto__ = obj
console.log(obj2.name);


class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayhi(){
        console.log(`Hi ${this.name}`);
        
    }
}

const person1 = new Person("Amit",21)
console.log(person1.name);
person1.sayhi();
