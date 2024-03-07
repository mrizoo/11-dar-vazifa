// ========= ✅home task ==========
// N1
// const students = [
//    { name: "Quincy", percent: 96 },
//    { name: "Jason", percent: 84 },
//    { name: "Alexis", percent: 100 },
//    { name: "Sam", percent: 65 },
//    { name: "Katie", percent: 90 },
//    { name: "Anna", percent: 75 },
//  ].map((item)=>{
//    if(item.percent >= 85){
//       return {...item, grade: 5}
//    }else if (item.percent <=84 && item.percent >=70){
//    return {...item, grade: 4}
//    }else if(item.percent >=60){
//       return {...item, grade: 3}
//    }else{
//       return {...item, grade: 2}
//    }
//  })
//  function getNameByGrade(students, grade) {
//    return students.filter((student)=>{
//       return student.grade === grade
//    }).map((student)=>{
//       return student.name
//    })
//  }
//  const result = getNameByGrade(students,5)
//  console.log(result);

// N2
// Berilgan massivlarni kvadratga kutarish
// const numbers = [1,2,3,4,5]
// function kvadrat(result){
//    return result ** 2
// }
// const natija = numbers.map(kvadrat)
// console.log(natija);

// N3
//suzlarni bosh harfni olish
//  const text = "George Raymond Richard Martin"
//  .split(' ').map((word)=>{
//   return word.charAt()
//  }).join('')
//  console.log(text);

//N4 yoshlarni farqni topish
// const yosh = [
//    {name: 'John', age: 13},
//    {name: 'Mark', age: 56},
//    {name: 'Rachel', age: 45},
//    {name: 'Nate', age: 67},
//    {name: 'Jeniffer', age: 65}
//    ].sort((a, b) => a - b)

//    console.log(yosh.at(-1).age - yosh.at().age);

//N5  massiv berilgan toq va juftlarini bitta massivga chiqarish
// const number= [1,2,3,4,5,6,7,8,9,10]
// const Juft = number.filter((num)=>{
//    return num % 2 == 0
// })
// const Toq = number.filter((num)=>{
//    return num % 2 != 0
// })
// console.log(Juft, Toq);

// let products = [
//     {
//       id: 6,
//       name: "Smarthpone",
//       price: 12000,
//       rating: 4.5,
//       discount: 20,
//     },
//     {
//       id: 2,
//       name: "Acer",
//       price: 10000,
//       rating: 4.3,
//       discount: 10,
//     },
//     {
//       id: 1,
//       name: "Mac book",
//       price: 17000,
//       rating: 4.7,
//       discount: 40,
//     },
//     {
//       id: 4,
//       name: "HP",
//       price: 21000,
//       rating: 4.1,
//       discount: 30,
//     },
//     {
//       id: 5,
//       name: "Dell",
//       price: 35000,
//       rating: 4.9,
//       discount: 30,
//     },
//   ];
  
  //  n6 rating buyica eng qimmati
  //  const sortByRating = products.sort((a,b)=>{
  //    return b.rating - a.rating
  //  })
  //  console.log(sortByRating);
  
  // N7 narxi buyica eng pasti toplisin
  // const sortByPrice = products.sort((a,b)=>{
  //    return a.price - b.price
  // })
  // console.log(sortByPrice.at());
  
  // N8 product name larni qaytarsin
  // const sortByName = products.map((word)=>{
  //    return word.name
  // })
  // console.log(sortByName);
  
  // N9 id si 5 bulgan elementni topish
  // const byId = products.find((prod)=>{
  // return prod.id ==5
  // })
  // console.log(byId);
  
  // N10 id si 4 bulgan elementni uchirihs
  // const byId = products.filter((prod)=>{
  //    return prod.id != 4
  // })
  //  console.log(byId);
  
  // N11 berilgan satrni faqat harflardan iborata ekanligini tek
  // const text = "Salom alekum bratim sz n1"
  // .split('').every((letter)=>{
  //   return !Number(letter)
  //  })
  //  console.log(text);
  
  // N12 true va false qiymatlar
  // const values = [false, 1, 10, "", null, "abdulaziz", 1.13, 0]
  // function getTruthyFalsy (val){
  //    return {
  //       truthy:val.filter((item)=> item),
  //       falsey:val.filter((item)=> !item),
  //    }
  // }
  // const result = getTruthyFalsy (values)
  // console.log(result);
  
  // N13 satrdagi so'zlarni uzunligini aniqlash
  // const text = "Men Abdulaziz Programmerman".split(' ').map((word)=>{
  //    return word.length
  // })
  // console.log(text);
  
  // N14 Satrda bush joy bormi yo'qligini aniqlash.
  // ❗
  // const text = "MenAbdulazizProgrammerman".split(' ').some((prabel) =>{
  //    return prabel.trim
  // })
  // console.log(text);
  
  //N15
  
  // const students = [
  //       { name: "Quincy", percent: 96 },
  //       { name: "Jason", percent: 84 },
  //       { name: "Alexis", percent: 100 },
  //       { name: "Sam", percent: 65 },
  //       { name: "Katie", percent: 90 },
  //       { name: "Anna", percent: 75 },
  //     ]
  //  const number = function(item){
  //    return item.map((element)=>{
  //       if(element <= 100 && element >=90 ){
  //          return {...element, grade: 5}
  //       }  else if (element.percent >= 80 && element.percent < 90) {
  //          return {...element, grade: 4}
  //        } else if (element.percent >= 70 && element.percent < 80) {
  //          return {...element, grade: 3}
  //        } else {
  //          return {...element, grade: 2}
  //        }
         
  //    })
  //  } 
  // const result = number(students)
  //  console.log(result);
  