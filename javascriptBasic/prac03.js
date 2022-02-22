let car = {
    name : "sonata",
    ph : 200,
    start : () => {
        console.log("engine start");
    },
    stop : () => {
        console.log("engine stop");
    }
}

console.log(car.name + "의 마력은 " + car.ph + "입니다.");
car.start();

//car.start; -> 에러는 나지 않지만, 원하는 동작을 하지 않는다.
//console.log(car.start); -> [Function: start]