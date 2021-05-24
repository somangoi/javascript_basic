'use strict';

//promise is a javascript object for asyncronous operation. 비동기적인 것을 수행할 때 콜백함수 대신에 유용하게 쓰일 수 있는 오브젝트
//공부 포인트 1. state(상태): pending(promise가 만들어진 후 operation이 수행 중일 때) -> fulfilled(operation을 성공적으로 끝냈을 때) or rejected(오류가 생겼을 때)
//공부 포인트 2. producer(정보제공자, promise object) vs consumer(정보소비자)

//1. producer
//새로운 프로미스가 만들어질 때 executor라는 함수가 바로 실행된다.(네트워크 통신 수행)
//따라서 사용자가 버튼 등을 눌렸을 때 네트워크 통신을 실행하는 기능을 만드려면 이 사실을 유의해야함.
const promise = new Promise((resolve, reject)=> {
    //doing some heavy work(network, read files은 시간이 걸리기 때문에 동기적으로 처리할 경우 다음 라인의 코드가 처리되는데 시간이 걸리기때문에 비동기적으로 처리하는 것이 좋음)
    console.log('doing something')
    setTimeout(() => {
        // resolve('somi');
        reject(new Error('no network'))
    }, 2000);
})
//promise가 만들어진 순간 안의 함수가 실행된다. 

//2. consumers: then, catch, finally를 이용해서 값을 받아올 수 있다.
//then: 
promise
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(()=>{
        console.log('finally')
    })
//reject를 사용할 경우: Error: no network
//resolve를 사용할 경우: somi
//finally는 성공여부와 상관없이 어떤 기능을 마지막으로 수행하고 싶을 때 사용한다.

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num)); //5
//비동기적인 여러가지를 동시에 묶어서 처리할 수도 있다.

//4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('hen'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error (`error! ${hen} => egg`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(()=> resolve(`${egg} => fried egg`), 1000);
    });

getHen()
    .then(getEgg)
    .catch(error =>{
        return 'bread';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);
//error가 제일 밑으로 전달된다.

// .then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal))