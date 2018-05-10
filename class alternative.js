const Person = function(name){
    
    this.name = name;
    this.language = "Bengali";
    
    this.info = function(){
        return `${this.name} talks in ${this.language}`;
    }
    
};

const firstPerson = new Person("Pollob");

firstPerson.age = 25;

console.log(firstPerson);
console.log(firstPerson.name);
console.log(firstPerson.info());