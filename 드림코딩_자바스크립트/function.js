//Function
//프로그램을 구성하는 기본적인 빌딩블럭
//subprogram이라고도 불리며 여러번 사용이 가능하다
//한가지의 테스크나 어떤 값을 계산하기 위해 사용된다.

//1. 함수 선언
//function name(prameter1, parameter2) {body...return;} 
//하나의 함수는 한가지 일만 처리한다.
//네이밍: 동사 위주로 설정
//자바스크립트에서 함수는 오브젝트이다!!

function printHello() {
    console.log('Hello')
}

printHello();

function log(message) {
    console.log(message);
}
log('hello!')
//자바스크립트는 타입 구분을 하지 않는다 --> typeScript를 사용하는 이유...

//2. Parameters
//premitive parameters : passed by value
//object parameters : passed by reference
function changeName(obj) {
    obj.name = 'coder'
}

const somi = {name: 'somi'};
changeName(somi);
console.log(somi);

//3. default parameters(added in ES6)
function showMsg(message, from){
    console.log(`${message} by ${from}`);
};
showMsg('Hi'); //Hi by undefined

function showMsg2(message, from ='unknown'){
    console.log(`${message} by ${from}`);
};
showMsg2('Hi'); //Hi by unknown

//4. Rest parameters (added in ES6)
function printAll(...args){
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    
    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('a', 'b', 'c')

//5. Local scope
let globalMessage = 'global'; //global variable
function printMessage () {
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello~!';
    }
    // console.log(childMessage); //Uncaught ReferenceError
}
printMessage(); 

//6. Return a value
function sum(a,b) {
    return a + b;
}
const result = sum(1,2); //3
console.log(`sum: ${sum(1,2)}`)

//7. Early return, early exit
//bad
function upgradeUser (user) {
   if(user.point > 10) {
       //long upgrade logic...
   }
}

//good: 조건에 맞을 경우 빨리 리턴을 하고 이후 동작을 블록 바깥에서 진행하는 것이 더욱 효율적이다.
function upgradeUser (user) {
    if(user.point <= 10) {
        return;
    };
    //long upgrade logic...
};

//First class function(일급함수)
//함수는 여느 변수들과 같이
//1) 변수에 할당되며
//2) 다른 함수의 인자로 전달할 수 있고,
//3) 리턴값으로도 리턴이 된다. 
//first class function이 의미하는 것은 일반적인 다른 데이타 타입(숫자, string, object 등)으로 할 수 있는 모든 것들을 함수를 통해서도 똑같이 할 수 있다는 것, 즉 일종의 '값(value)'로 다뤄진다는 것이다. 정리하자면 우리는 함수의 property에 접근 할 수 있는데 그 이유는 JavaScript에서 함수는 "first class object"이기 때문임.

//1. Function expression
//함수 선언식은 호이스팅에 영향을 받지만, 함수 표현식은 호이스팅에 영향을 받지 않는다.
const print = function () {
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3))

//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'somi is the best'){
        printYes();
    }else{
        printNo();
    }
}

const printYes = function () {
    console.log('yes')
}

const printNo = function () {
    console.log('no')
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('somi is the best', printYes, printNo)

//3. Arrow function
//always anonymous
const simplePrint = function () {
    console.log('simplePrint!')
};
simplePrint();

const simplePrint2 = () => console.log('simplePrint!');
simplePrint2();

const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    //do something more
    return a * b;
}

//4. IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE')
})();