'use strict';
//class: template
//object: instance of a class
//JavaScript classes
// - introduced in ES6: 이전에는 템플릿없이 함수로 오브젝트를 만들 수 있었다. 
// - 기존에 존재하던 프로토타입에 기반하여 문법만 클래스에 추가된 것임


//1. Class declarations
class Person {
    //constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.name}: hello!`)
    }
}

const somi = new Person('somi', 20);
console.log(somi.name);
console.log(somi.age);
somi.speak();

//여기서 this는 생성된 오브젝트를 뜻함.

//2. Getter and setters
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age; //getter와 setter를 호출
    }
    get age() {
        return this._age;
    }

    set age(value){
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Jobs', -1);
//user가 멍청하게 나이를 -1으로 설정하면 말이 안됨! --> getter와 setter를 이용해서 자동으로 수정되도록 함.

console.log(user1.age) //여기서 '_age'가 아닌 'age'를 사용해도 되는 이유는 getter와 setter를 이용했기 때문.

// 3. Fields (public, private)
// 너무 최근에 나옴! 아직 최신 브라우저에서도 지원되지 않음
class Experiment {
    publicField = 2;
    #privateField = 0; //class내부에서만 값에 접근, 수정이 가능하다.
}
const experiment = new Experiment();
console.log(experiment.publicField); //2
console.log(experiment.privateField); //undefined

// 4. Static properties and methods
// 이것도 too soon!
class Article {
    static publisher = 'dream coding';
    constructor(articlenumber){
        this.articlenumber = articlenumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
//a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
const rectangle = new Rectangle(20, 20, 'tomato');
rectangle.draw();
console.log(rectangle.getArea())

class Triangle extends Shape {
    draw(){
        super.draw(); //부모의 draw함수 호출
        console.log('💕');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
} //원하는 함수만 재정의 할 수 있다.
const triangle = new Triangle(20, 30, 'blue');
triangle.draw();
console.log(triangle.getArea())

// 6. Class checking : instanceOf
// 좌측의 인스턴스가 우측의 클래스에서 만들어진 인스턴스인지를 검사하는 것
//true와 false를 리턴한다
console.log(rectangle instanceof Rectangle); //ture
console.log(triangle instanceof Rectangle); //false
console.log(triangle instanceof Triangle); //true
console.log(triangle instanceof Shape); //Shape을 상속했으므로 ture
console.log(triangle instanceof Object); //자바스크립트에서 만든 모든 클래스들은 자바스크립트의 object를 상속한 것이므로 ture
//따라서 모든 오브젝트, 클래스들은 공통으로 존재하는 메소드를 사용할 수 있다. ex.toString()
