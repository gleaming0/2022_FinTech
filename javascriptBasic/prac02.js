//method, func 선언 예전방식
function test(p1, p2) {
    //console.log(this);
    return p1+p2;
}

let result = test(5, 5);
console.log(result);

const plus = (p1, p2) => {
    //console.log(this);
    return p1+p2;
}
console.log(plus(1, 4));

//work#01
//arrow func로 minus / multi / div 세 개의 기능을 선언할 것
const minus = (p1, p2) => {
    return p1-p2;
}

const multi = (p1, p2) => {
    return p1*p2;
}

const div = (p1, p2) => {
    return p1/p2;
}

console.log(minus(4, 1));
console.log(multi(1, 4));
console.log(div(1, 4));