const Person = {
  name : "Imran Pollob",
  age : 25,
  
  info(){
    return `Name: ${this.name} Age: ${this.age}`;
  }
};


const firstPerson = Person.info();

console.log(firstPerson);  
