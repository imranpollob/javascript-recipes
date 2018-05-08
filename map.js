let map = new Map([
    ['age', 25],
    [0, 'first index'],
    [true, 'Yeah Its True'],    
]);

map.set('name', 'Pollob');

console.log(map.get('name'));
console.log(map.get(true));
console.log(map.has('age'));