//1. String concatenation

console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators

console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //devide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

// 3. Increment operators

let counter = 2;
const preIncrement = ++counter;
//counter = counter + 1; 먼저 값을 더해주고
//preIncrement = counter; 변수에 할당한다.
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`);

const postIncrement = counter++;
//postIncrement = counter; 변수에 할당한다음
//counter = counter + 1; 값을 더해준다.
console.log(`postIncrement : ${preIncrement}, counter : ${counter}`);

//4. Assignment operators

let x = 3;
let y = 6;
x += y; // x= x + y 와 같은 의미    
x -= y;
x *= y;
x /= y;

//5. Comparison operators

console.log(10 < 6); //false
console.log(10 <= 6); //false
console.log(10 > 6); //ture
console.log(10 >= 6); //ture

//6. Logical perators: || or , && and, ! not

const value1 = false;
const value2 = 4 < 2;
//or 연산자는 처음으로 true가 나오면 거기서 멈춘다! 그래서 함수와 같이 연산을 많이하는 것을 뒤로 넣어야 효율적임
console.log(`or: ${value1 || value2 || check()}`);

//and도 헤비한 오퍼레이션을 뒤로 보내는 것이 좋다.(하나만 false여도 false기 때문에..!)
console.log(`and: ${value1 && value2 && check()}`);

function check(){
    for (let i = 0; i < 10; i++){
        console.log('yay!')
    }
    return true;
}

//not 연산자는 값을 반대로 바꾸어줌
console.log(!value1); //true

//7.Equality

const stringFive = "5";
const numberFive = 5;

//== loose equality, with type conversion
console.log(stringFive == numberFive); //ture
console.log(stringFive != numberFive); //flase

//=== strict equality, no type conversion
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true

//object equality by reference
const somi1 = { name: 'somi' };
const somi2 = { name: 'somi' };
const somi3 = somi1;
console.log(somi1 == somi2); //false reference 값이 다르다.
console.log(somi1 === somi2); //false
console.log(somi1 === somi3); //ture

// **quiz**
console.log(0 == false); //t 0, null, empty string, undefined는 모두 false로 간주될 수 있다.
console.log(0 === false); //f 하지만 타입은 불리언이 아니기 때문에 false
console.log('' == false); //t
console.log('' === false); //f
console.log(null == undefined); //t 특이하지만 true!
console.log(null === undefined); //f

//8. Conditional operators: if
//if, else, if else
const name = 'somi';
if (name === 'somi') {
    console.log('welcome Somi');
} else if (name === 'coder') {
    console.log('you are an amazing coder');
} else {
    console.log('unknown');
}

//9. Ternary operator: ?
//condition ? value1 : value2; 
//간단할 때만 쓸 것
console.log(name === 'somi' ? 'yes' : 'no');

//10. Switch statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS
const browser = 'Chrome';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all');
        break;
}

//11. Loops
//조건이 false가 될 때까지 출력한다.

let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

//먼저 블럭을 실행한다음 조건이 맞는지 안맞는지 검사한다. 블럭을 먼저 실행하고 싶을 때 쓴다.
do {
    console.log(`do while: ${i}`);
    i--;
}while (i > 0);

//for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    //inline variable declaration
    console.log(`inline variable for : ${i}`)
}

//nested loops: cpu에 좋지 않아 안쓰는게 좋다
for (let i = 0; i < 10; i++) {
    for (let j = 0; j <10; j++) {
        console.log(`i: ${i}, j: ${j}`)
    }
}

//** quiz **
//1. 짝수만 출력하기(continue이용)
for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`q1. ${i}`)
};
//2. iterate from 0 to 10 and print numbers until reaching 8(use break)
for ( let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2. ${i}`)
}