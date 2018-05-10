const Person = function(name, language, likes = []){
    this.name = name;
    this.language = language;
    this.likes = likes;
    
    this.info = function(){
        return `${this.name} talks in ${this.language}`;
    }
    
  };
  
  Person.prototype.secret = function(){
    return `${this.name} likes ${this.likes}`;
  }
  
  Person.prototype.setSecret = function(secret){
    let likings = "";
    secret.forEach(like => likings += " "+like);
  
    this.likes = likings;
  }
  
  const pollob = new Person("Pollob", "Bengali");
  const tanji = new Person("Tanji", "English");
  
  tanji.age = 25;
  
  console.log(tanji.info());
  console.log(tanji.age);
  
  console.log(pollob.name);
  console.log(pollob.info());
  
  pollob.setSecret(["Ice Cream", "Gaming"]);
  
  console.log(pollob.secret());