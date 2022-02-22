let car01 = "sonata";
let car02 = "bmw";
let car03 = "tesla";

let cars = [car01, car02, car03];
console.log(cars[0]);
// 각 데이터 값이 출력된다. object의 경우 데이터/함수 이름과 값까지 다 나옴

for(let i=0; i<3; i++) {
    console.log(i);
} //-> 0 1 2

for(car of cars) {
    console.log(car);
} //-> sonata bmw tesla

for(let i=0; i<cars.length; i++) {
    let car = cars[i];
    console.log(car);
} //-> sonata bmw tesla

cars.map((car)=> {
    console.error(car);
}); //-> sonata bmw tesla