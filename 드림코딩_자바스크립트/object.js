'use strict';
//Object
//one of the javaScript's data types.
//a collection of related data and/or functionality.
//nearly all objects in JS are instances of Object
//object는 key와 value의 집합체이다. object = {key : value}

//1. Literals and properties

//변수의 경우 이렇게 각각 출력해야함. 관리가 힘듦
// const name = 'somi';
// const age = 20;
// print(name, age);
// function print(name, age){
//     console.log(name);
//     console.log(age);
// }

//그러나 object의 경우, 데이터를 한데 묶어두기에 관리가 용이함.
//객체 생성방법에는 두가지가 있다.
const obj1 = {}; //object literal
const obj2 = new Object(); //object constructor 

//예시
function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const somi = { name: 'somi', age: 20 }
print(somi);

//추가하기
somi.hasJob = false;
console.log(somi.hasJob); //false
console.log(somi) //{name: "somi", age: 20, hasJob: false}

//삭제하기
delete somi.hasJob;
console.log(somi.hasJob); //undefined
console.log(somi) //{name: "somi", age: 20}

//2. Computed properties(계산된 프로퍼티)
//데이터에 접근은 두가지 방법이 있다. 닷 또는 computed property
//닷을 사용하는 경우는 코딩하는 그 순간 키의 값에 해당하는 것을 받아오고 싶을때,
//컴퓨티드는 런타임에서 그 값이 결정될때(답을 모를때) 사용된다.(실시간)

//key는 항상 string타입으로 접근되어야 한다.
console.log(somi.name); //somi
console.log(somi['name']); //somi
somi['hasJob'] = true;
console.log(somi.hasJob); //true

function printValue(obj, key){
    console.log(obj.key)
}
printValue(somi, 'name')//undefined

function printValue2(obj, key){
    console.log(obj[key])
}
printValue2(somi, 'name')//somi

//3. Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};

function makePerson(name, age) {
    return{
        name,
        age,
    };
}

const person4 = makePerson('somi', 30);

console.log(person4); //{name: "somi", age: 30}

//4. Constructor function
function Person(name, age) {
    //this = {};
    this.name = name;
    this.age = age;
    // return this;
}

//5. in operator: property existence check(key in obj)
//해당하는 오브젝트 안에 키가 들어있는지 여부를 확인하는 것
console.log('name' in somi); //true
console.log('age' in somi); //true
console.log('random' in somi); //false
console.log(somi.random); //정의하지 않은 키를 설정하면 undefined 

//6. for..in vs for..of
//for (key in obj)
for(let key in somi){
    console.log(key)
}

//for (value of iterable)
const array = [1,2,3,4,5];
for (let value of array) {
    console.log(value);
}

//7. Cloning
//Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'somi', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user); //{name: "coder", age: "20"}

//old way
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.log(user3) //{name: "coder", age: "20"}

//new way1
const user4 = {};
Object.assign(user4, user); 
console.log(user4);

//new way2
const user5 = Object.assign({}, user)
console.log(user5);

//another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color, mixed.size); //blue, big
//뒤에 있는 오브젝트가 덮혀 씌어진다.