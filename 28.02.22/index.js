//Упражнение 1
// let number = 10+5;
// alert(number);

//Упражнение 2
// const name = prompt ("Ваше ФИО");

// //Упражнение 3
// console.log(typeof 3);
// console.log(typeof "Всем привет");

//Упражнение 4
// let a = +prompt("Введите число a");
// let b = +prompt("Введите число b");

// const c = (a + b);
// alert(c);

//Упражнение 5
// let a = +prompt("Введите число a");
// let b = +prompt("Введите число b");

// const c = (a / b);
// alert(c);

// alert("Hello world");

// let year = prompt('В каком году была опубликована');
// if (year == 2015) {
//     alert( 'Вы правы!' );
// } else {
//     alert('Ты не прав чувак');
// }

// Упражнение 6
// let a = 5, b = 15;
// console.log(++a);

// console.log(b++); //Выводит конечный результат
// console.log(b); // Выводит в начале заданное число и после выводит конечный результат

// Упражнение 7
// let a = 10;

// if (!(a % 2)) {
// console.log('Число четное');
// }

// Упражнение 8
// console.log(1 == '1'); // Не строгое равенство не видет что число обернуто в строчный тип данных
// console.log(1 === '1'); // Строгое равенство видит что есть строчный тип данных даже если оно число

// Упражнение 9
// console.log(typeof 11);
// console.log(typeof "Hello");
// console.log(typeof { a: 1 });
// console.log(typeof null);
// console.log(typeof false);

// Упражнение 10
// const A = 20;

// let result = A % 2 ? 'A нечетное' : 'A четное';
// alert(result);

// Упражнение 11
// let password = prompt('введите пароль');
// if (password == 123 || password == 321) {
//     alert('Вы успешно вошли в систему');
// } else {
// alert('error')
// }

// let one = prompt ('введите пароль');
// let two = prompt ('введите пароль');

// if (one == 12 && two == 30) {
//   alert('Вы успешно вошли в систему');
// }

// Упражнение 12
// console.log(!('30'));

// let a = 5, b = 10;

// Упражнения 09.03.22
// №1

// const list = (one, two, three) => {
//     console.log(one + two * three)
// }
// list(10, 5, 2)

// function fox () {
//     console.log('future')
// }
// fox()

// №2
// let one = 25;
// let two = 25;

// const number = () => {
//   if (one > two) {
//     console.log(1);
//   } else if (one < two) {
//     console.log(2);
//   } else {
//     console.log(0);
//   }
// };
// number();

// №3
// const login = (red,blue) => {
//     console.log(red + blue);
// }
// login(100,50)

// const login1 = (red,blue) => {
//     console.log(red - blue);
// }
// login1(100,50)

// const login2 = (red,blue) => {
//     console.log(red * blue);
// }
// login2(100,50)

// const login3 = (red,blue) => {
//     console.log(red / blue);
// }
// login3(100,50)

// №4
// const pag = (name='гость') => {
//     console.log(name);
// }
// pag('Здравствуйте, (name)')

// №5
// function fib(n) {
// return n <= 1 ? n: fib(n-1) + fib(n-2);
// }
// console.log(fib(3));

// №6
  
// Домашка 21.03.22
// №1
// let i = 0;
// while (i <= 10) {
    
//     console.log(i);
//     i++;
// }

// let a = 0;
// do {
//     console.log(a);
//     a++;
// } while (a <= 10);

// for (let b = 0; b <= 10; b++) {
//     console.log(b);
// }

// №2


// for (i=0;i<100;i++) {
//     let text = prompt('завершить');
//     if (text === 'завершить') {
//         break;
//     }

//     console.log(i);
// }

// №3
// for (let i=0; i<=20; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

// №4
// let i=10+5;
// switch (i) {
//     case 3:
//         console.log('error');
//         break;
//     case 6:
//         console.log('error');
//         break;
//     case 10:
//         console.log('error');
//         break;
//     case 15:
//         console.log('good');
//         break;
//     case 3:
//         console.log('error');
//         break;
//     default:
//         console.log('нет ответа')
// }

// №5
// let a=5,b=8;
// a=10;
// b=20;
// console.log(a,b)

// №6
// let num = 143.2343;
// console.log(num.toFixed(2));

// №7
// let num = 42.2654;
// console.log(num.toFixed(1));

// №8
// let text = 'I learn JavaScript';
// console.log(text.indexOf('JavaScript'));

// Домашка от 23.03.22
// №1
/*
const object = {
    a: 'a',
    b: 'b',
    c: 'c'
}
console.log(object.a)
console.log(object.b)
console.log(object.c)
console.log(object['a'])
console.log(object['b'])
console.log(object['c'])
*/
// №2
// const box = {
//     a: 2,
//     b: 5,
// user: {
//     name: 'tomas',
//     age: 30,
//     profession: 'doctor',
// }
// }
// const box2 = { // Spread-оператора
//     ...box
// }
// console.log(box, box2)
// box2.a = 10;

// let box2 = Object.assign({}, box); 
// console.log(box, box2)
// box2.user.age = 50;

// №3
// const list = {
//     a: 2,
//     b: 5,
// }
// console.log(list.a)
// delete list.a;
// console.log(list.a)

// №4
const objectBox = {}
objectBox['name'] = 'Иван';
objectBox['lastName'] = 'Иванов';
objectBox['salary'] = 25;
// console.log(objectBox.name);
for (let pot in objectBox) {
    console.log(pot)
    console.log(objectBox[pot])

}

