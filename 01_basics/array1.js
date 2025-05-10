const arr = [1,2,3,4,"nadira"]
const arr2 = ["nadira", "naz", "sakeena"]




const myArr = new Array(1,2,3,4)
// console.log(myArr.toString());
// console.log(myArr);


const newArr = myArr.slice(1,3);
// console.log(newArr);

const newArr1 = myArr.splice(1,3);
// console.log(newArr1);

const marvel_heroes = ["ireman","spiderman","hunk"]
const dc = ["superman"]


// marvel_heroes.push(dc)
// console.log(marvel_heroes)
// console.log(marvel_heroes.concat(dc))
//spread operator
const newADF = [...marvel_heroes, ...dc]
console.log(newADF)