class Person{
    constructor(name, age, gender){
        this.name   = name;
        this.age    = age;
        this.gender = gender;
    }

    moreAge(){
        this.age++;
    }
}

const pollob = new Person('Pollob', 25, "Male");
pollob.moreAge();
console.log(pollob);

class Personal extends Person{
    constructor(name, age, gender, occupation, hobby){
        super(name, age, gender);
        this.occupation = occupation;
        this.hobby = hobby;
    }

    moreAge(){
        super.moreAge();
        this.age += 10;
    }
}

const imran = new Personal("Imran", 25, "Male", "Student", "Gaming");
imran.moreAge();
console.log(imran);
