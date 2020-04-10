let students = [
    {id : 1, name : "Al Nasimul Haque"}, {id : 2, name : "Robin Ahmed"}, {id : 3, name : "Kosru Mia" }
];

let names = students.map( e => e.name);
let idS   = students.filter( e => e.id < 3);

console.log(names);

console.log(idS);