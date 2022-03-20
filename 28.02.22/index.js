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
// let two = 5;

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
// const pag = (name) => {
//     console.log(name);
// }
// pag('Здравствуйте, (name)')

const fib2 = n => {
    if(n == 0){
      return [0, 1];
    }else{
      const [prev, next] = fib2(n - 1);
      return [next, prev + next];
    }
  }
  
  const fib = n => fib2(n)[0];