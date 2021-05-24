'use strict';
//JSON(JavaScript Object Notation)

//1. Object to JSON
//stringify(obj)

let json = JSON.stringify(true);
console.log(json) //true

json = JSON.stringify(['apple', 'banana']);
console.log(json) //["apple","banana"]

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // symbol: Symbol('id'),
    jump: () => {
        console.log(`${this.name} can jump!`)
    },
};

json = JSON.stringify(rabbit);
console.log(json); //{"name":"tori","color":"white","size":null,"birthDate":"2021-05-23T08:12:24.639Z"}
//함수는 오브젝트에 있는 데이터가 아니기 때문에 제외된다. 자바스크립트에만 있는 심볼과 같은 특별한 데이터도 포함되지 않는다.

json = JSON.stringify(rabbit, ['name']);
console.log(json); //{"name":"tori"}

json = JSON.stringify(rabbit, (key,value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'somi' : value;
});
console.log(json);

// key: , value: [object Object]
// key: name, value: tori
// key: color, value: white
// key: size, value: null
// key: birthDate, value: 2021-05-23T08:54:57.735Z
// key: jump, value: () => {
//         console.log(`${this.name} can jump!`)
//     }
// {"name":"somi","color":"white","size":null,"birthDate":"2021-05-23T08:54:57.735Z"}

//2. JSON to Object
//parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
// {
// name: 'tori',
// color: 'white',
// size: null,
// birthDate: '2021-05-23T08:58:47.586Z'
// }

rabbit.jump(); //undefined can jump!
// obj.jump(); //TypeError: obj.jump is not a function
//json으로 변환할때는 함수는 포함되어있지 않다.

console.log(rabbit.birthDate.getDate()); //23
console.log(obj.birthDate.getDate()); //error! json으로 변환시에 데이터가 스트링으로 전환되기 때문에 날짜를 가져오지 못한다.

const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj2.birthDate.getDate()); //29