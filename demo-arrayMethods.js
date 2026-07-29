let ar=[1,4,3,2,5]
// ar.push(10);
//ar.pop();
//ar.unshift(10);
//ar.shift();

//console.log(ar.includes(3));
//console.log(ar.indexOf(4));
//console.log(ar.join(":"))
//console.log(ar.toString());
//console.log(ar.slice(1,3));
//console.log(Array.isArray(ar))
//ar.reverse();
//console.log(ar)
//console.log(ar.sort());
// let ar2=ar.map(e=>e*2);
// console.log(ar2)
// let ar2=ar.map(function doubleNum(e){
//     return e*2;
// });
// console.log(ar2)

// ar.forEach(function printElement(e){
//     console.log(e);
// });
// let sum=0;
// ar.forEach(function addElements(e){
//     sum = sum+e;
// });
// console.log(sum)

// let ar2=ar.filter(function evenNum(e){
//     return e%2==0;
// });
// console.log(ar2);

let x=ar.find(num => num>3);
console.log(x) // only returns the 1st element after 3
