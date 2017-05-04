var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

// var students = ["bruce", "zoidberg", "alex", "alex"];

// students.sort(function(a,b){
//   var nameA = a.name;
//   var nameB = b.name;

//   if (nameA < nameB){
//     return - 1
//   }

//   if (nameA > nameB){
//     return 1;
//   } else if (nameA === nameB) {
//     students.sort(function(a,b){

//       var ageA = a.age
//       var ageB = b.age

//       if (ageA < ageB) {
//         return  1
//       } else {
//           return -1;
//       }
//     });
//   }
// });

students.sort(function (x, y) {
    // var n = x.name - y.name;
    // console.log('n', n);
    // if (n !== 0) {
    //     return n;
    // }
    if (x.name > y.name) {
      return 1;
    } else {
      return -1;
    }

    return x.age - y.age;
});
// students.age.sort(function(a,b){
//   return a - b
// }

//   )

console.log(students)