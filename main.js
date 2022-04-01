'use strict';
/*coding  challenge 
1.Use a constructor function to implement a car.A
car has a make and a speed property.The speed pro-
perty is the current speed of the car in km/h;
2.Implement an 'accerelate' method that will incr-
ase the speed of a car by 10 , and log the new sp-
eed to the console;
3.Implement a 'brake' method that will decrease the
speed of a car by 5 ,and log the new speed to the 
console;
4.create two car objects and experiment with calling
"accerelate" and "brake" methods multiple times on 
 on each of them;

 DATA car 1:"BMW" going at 120km/h;
 DATA car 2: "Mercedes" going at 95km/h;
*/
// using constructor function in object oriented javascript programming

function Car(make,speed){
   this.make = make;
   this.speed = speed;
}

Car.prototype.acceralate = function(){
    this.speed+=10;
    console.log(`${this.make} is going at ${this.speed}km/h`)
}
Car.prototype.brake = function(){
    this.speed-=5;
    console.log(`${this.make} is going at ${this.speed}km/h`)
}

const bmw = new Car("BMW",120);
const mercedes = new Car("Mercedes",95);
bmw.acceralate();
bmw.acceralate();
bmw.acceralate();
bmw.brake();
bmw.brake();
bmw.brake();
mercedes.acceralate();
mercedes.acceralate();
mercedes.acceralate();
mercedes.brake();
mercedes.brake();
mercedes.brake();
