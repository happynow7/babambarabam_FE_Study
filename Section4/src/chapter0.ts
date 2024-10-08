/**
 * 함수 타입 정의
 */
function func(a: number, b: number) {
    return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number) => a + b;

/**
 * 함수의 매개변수
 */

function introduce(name = "양혜인", age: number, tall?: number) {
    console.log(`name : ${name}`);
    if (typeof tall === "number") {
        console.log(`tall : ${tall - 10}`);
    }
}

introduce("양혜인", 24, 164);

introduce("양혜인", 24);

function getSum(...rest: [number, number, number]) {
    let sum = 0;
    rest.forEach((it) => (sum += it));

    return sum;
}

getSum(1, 2, 3); // 6
// getSum(1, 2, 3, 4, 5); // 15