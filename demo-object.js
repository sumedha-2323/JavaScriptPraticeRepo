// const person ={
//     name:"sumedha",
//     age:22,
//     place:"Hyderabad",
//     greet: function(){
//         console.log("Hello, my name is "+this.name);
//     }
// };
// console.log(person);
// console.log(person.name);
// person.greet();

let car={
    company:"kia",
    model:"carrens",
    color:"Blue",
    price:2500000,
    millage:23.45,
    wheels:4,
    startCar:function(){
        console.log(this.company+" car started");
    },
    stopCar:function(){
        console.log(this.company+" car stopped");
    },
    carDetails:function(){
        console.log("Company of the car is "+this.company);
        console.log("Model of the car is "+this.model);
        console.log("Color of the car is "+this.color);
        console.log("Price of the car is "+this.price);
        console.log("Millage of the car is "+this.millage);
        console.log("Number of wheels of the car is "+this.wheels);
    }
}
console.log(car);
console.log(car.company);
car.startCar();
// //adding property to the object
// car.owner="sumedha";
// console.log(car);
// to delet the property from the object
// delete car.millage;
// console.log(car);

// update
// car.price=2400000;
// console.log(car)

//for in loop
for(let key in car){
    console.log(key+" : "+car[key]);
}