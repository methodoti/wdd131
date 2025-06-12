
console.log("hello Marcelo");

let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];
console.log(names);

let namesB = names.filter(name => name.charAt(0) === "B");
console.log(namesB);

names.reduce((total, name) => total + name.length, 0) / names.length;
console.log(names);

