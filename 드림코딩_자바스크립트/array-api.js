// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  let listOfFruit = fruits.toString();
  console.log(listOfFruit);

  let fruit = fruits.join();
  console.log(fruit);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  let array = fruits.split(",");
  console.log(array)
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const reversedArray = array.reverse();
  console.log(reversedArray); //[5, 4, 3, 2, 1]
  console.log(array); //[5, 4, 3, 2, 1] 원 배열도 바꾼다.
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const arrayCopy = array.slice(2);
  console.log(arrayCopy); //[3, 4, 5]
  //splice는 원배열을 바꾸기 때문에 여기서는 사용할 수 없다.
  console.log(array) //[1, 2, 3, 4, 5]
}



//
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const enrolledStudents = students.filter((student) => student.enrolled);
  console.log(enrolledStudents);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const studentScores = students.map((student) => student.score);
  console.log(studentScores)
}

// Q8. check if there is a student with the score lower than 50
{
  const check = students.some((student) => student.score < 50);
  console.log(check);
  const check2 = !students.every((student) => student.score >= 50);
  console.log(check2);
}

// Q9. compute students' average score
{
  const result = students.reduce((pre,cur)=> pre + cur.score, 0)
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const scoreString = students
  .map((student) => student.score)
  // .filter(score => score >= 50) 50점 이상인 아이들만 뽑고 싶다면..!
  .join();
  console.log(scoreString);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const scoreOrder = students.map((student) => student.score)
    .sort((a, b) => a - b)
    // .sort((a, b) => b - a); //내림차순으로 정렬하고 싶을때
    // .join();
  console.log(scoreOrder);
}

const characters = [
  {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      eye_color: 'blue',
      gender: 'male',
  },
  {
      name: 'Darth Vader',
      height: '202',
      mass: '136',
      eye_color: 'yellow',
      gender: 'male',
  },
  {
      name: 'Leia Organa',
      height: '150',
      mass: '49',
      eye_color: 'brown',
      gender: 'female',
  },
  {
      name: 'Anakin Skywalker',
      height: '188',
      mass: '84',
      eye_color: 'blue',
      gender: 'male',
  },
];

const charactersEyeColor = characters.reduce((acc, cur) => {
  const color = cur.eye_color;
  if(acc[color]){
    acc[color]++;
  } else{
    acc[color] = 1;
  }
  return acc;
}, {});
console.log(charactersEyeColor)