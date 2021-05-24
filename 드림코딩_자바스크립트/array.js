//비슷한 타입의 오브젝트들을 묶어 두는 것을 자료구조라고 한다.
//다른 언어에서는 동일한 타입의 데이터만 한데 묶을 수 있다. 
//자바스크립트는 다양한 종류의 데이터 타입을 담을 수 있지만 프로그래밍적으로 좋지는 않다.
//자료구조에서는 검색, 삽입, 정렬, 삭제가 가능하다.

//배열
//point! 인덱스가 지정되어 있는 칸의 나열
//한 배열안에는 동일한 타입의 데이터를 넣는 것이 좋다.

'use strict';

//Array
//1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); //apple
console.log(fruits[1]); //banana
console.log(fruits[2]); //undefined
console.log(fruits[fruits.length - 1]); //마지막 데이터에 접근하기

//3. Looping over an array
//print all fruits
//a. for
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]); 
}

//b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

//c. for each
fruits.forEach((fruit) => console.log(fruit));

//4. Addition, deletion, copy
//push: ass an item to the end 
fruits.push('strawberry', 'peach');
console.log(fruits); //["apple", "banana", "strawberry", "peach"]
//pop: remove an item from the end
fruits.pop();
console.log(fruits); //["apple", "banana", "strawberry"]
fruits.pop();
console.log(fruits); //["apple", "banana"]

//unshift: add an item to the beginning
fruits.unshift('strawberry', 'lemon');
console.log(fruits) // ["strawberry", "lemon", "apple", "banana"]

//shift: remove an item from the beginning
fruits.shift();
console.log(fruits); // ["lemon", "apple", "banana"]

fruits.shift();
console.log(fruits); //["apple", "banana"]

//note!: shift와 unshift는 pop과 push보다 훨씬 훨씬 느리다! 배열은 빈공간에 데이터를 추가/삭제하기 때문이다. 배열이 길면 길수록 이 속도는 더욱 지체된다!

//splice: remove an item by index position
fruits.push('strawberry', 'lemon', 'peach');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits); //["apple", "strawberry", "lemon", "peach"]
//원하는 개수를 지정하지 않으면 시작하는 인덱스 부터 뒤의 모든 데이터를 지워버린다.

fruits.splice(1, 1, 'pear', 'orange'); //인덱스 1의 데이터 한개만 삭제하고 그 자라에 새로운 항목 추가
console.log(fruits); //["apple", "pear", "orange", "lemon", "peach"]

//concat: combine two arrays
const fruits2 = ['mango','pine'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits) //["apple", "pear", "orange", "lemon", "peach", "mango", "pine"]

//5. Searching
//find the index
console.log(fruits); //["apple", "pear", "orange", "lemon", "peach"]
console.log(fruits.indexOf('lemon')); //3
console.log(fruits.indexOf('mango')); //-1 배열에 없는 값을 출력하면 -1이 나옴

//includes
console.log(fruits.includes('lemon')); //true
console.log(fruits.includes('mango')); //false

//lastIndexOf
fruits.push('apple');
console.log(fruits); //["apple", "pear", "orange", "lemon", "peach", "apple"]
console.log(fruits.indexOf('apple')); //0 같은 데이터가 있으면 앞에 있는 데이터를 먼저 찾는다.
console.log(fruits.lastIndexOf('apple')); //5 마지막에 있는 동일 데이터를 찾고싶을땐 lastIndexOf





