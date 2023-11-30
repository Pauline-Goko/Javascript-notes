function Person(name, age, height){
    this.name = name;
    this.age = age;
    this.height = height;
};
 

let person = new Person("Agnes" , 23, "4ft");  //new allows us to initite the constructor
console.log({person});
console.log(person);

let person2 = new Person("Ann" , 20, "6ft");
console.log(person2.weight = 70);
console.log(person2)

console.log(Person.prototype);

Person.prototype.weight = 50;
console.log({person});
console.log(person.weight);
console.log(person instanceof Person);  //to find out if the instance is in  the costructor