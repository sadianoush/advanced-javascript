const students = [
   {id: 23, name: 'sayek mahbub'},
   {id: 29, name: 'hello mahbub'},
   {id: 41, name: 'moyuri'},
   {id: 71, name: 'dipjol'}
];

// const names = students.map( s => s.name);
// // console.log(names);
// const ids = students.map(s=> s.id);
// // console.log(ids);
// const bigger = students.filter( s => s.id>40);
// console.log(bigger);

const biggerOne = students.find( s => s.id>40);
console.log(biggerOne);