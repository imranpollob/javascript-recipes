let student = {
  name : "Pollob"
};
  
let section = function(a, b){
  return `${this.name}  :  ${a}  ::  ${b}`;
};

let data = [ 15, "YoYo" ];

console.log( section.call(student, 12, "Yo") );

console.log( section.apply(student, data) );

let bound = section.bind( student );

console.log( bound(17, "Ultron") );