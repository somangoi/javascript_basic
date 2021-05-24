'use stcrit';

//1. 동기와 비동기
//Javascript is syncronous.
//Execute the code block in order after hoisting
//호이스팅 된 이후 부터 하나하나씩 동기적으로 실행된다는 말.

console.log('1');
setTimeout(() => console.log('2') ,1000); //비동기적인 실행방법
console.log('3');

//동기적: 정해진 순서에 맞게 코드가 실행되는 것
//비동기적: 언제 코드가 실행될지 예측할 수 없는 것

//2. 콜백 마지막 정리
//콜백이라고 항상 비동기적인 것은 아니다!

//Syncronous callback
function printImmediately(print){
    print();
}
printImmediately(() => console.log('hello'));

//asyncronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(()=>console.log('async callback'),2000);

//3. 콜백지옥 예제
class UserStorage {
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if (
                (id === 'somi' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ){
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'somi'){
                onSuccess({ name: 'somi', role: 'admin' });
            }else{
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStroage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStroage.loginUser(
    id, 
    password,
    user => {
        userStroage.getRoles(
            user,
            userWithRole => {
                alert(`hello! ${userWithRole.name}, you have a ${userWithRole.role} role.`)
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);

//가독성이 떨어지고 로직을 한눈에 알아보기가 너무 어렵다.
//디버깅하기도 유지보수 하기도 넘나 어렵게 된다.

//promise는 비동기를 간편하게 수행할 수 있는 오브젝트이다. 