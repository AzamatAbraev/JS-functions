// ----- Func1 ----- //

// function power (a, n) {
//   let res = a ** n;
//   return res;
// }

// const power = (a, n) => res = a ** n;

// let check = power(1,5);

// console.log(check);

// ----- Func2 ----- //

// function mean (a, b) {
//   let x = (a + b) / 2;
//   let y = (a + b) ** (1 / 2);
//   console.log(a, b);
// }

// mean(12, 48);

// ----- Func3 ----- //

// function sign (n) {
//   if (n > 0) {
//     return 1;
//   } else if (n < 0) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

// let check = sign(0);

// console.log(check);

// ----- Func4 ----- //

// function numberOfRoots(A, B, C) {
//   let D = B ** 2 - 4 * A * C;
//   if (A != 0) {
//     if (D > 0) {
//       return 2;
//     } else if (D < 0) {
//       return 0;
//     } else {
//       return 1;
//     }
//   } else {
//     return "A should not be equal to 0";
//   }
// }

// let check = numberOfRoots(0, -6, 9);

// console.log(check);

// ----- Func5 ----- //

// const PI = 3.14;

// function areaCircle(R) {
//   let S = PI * (R ** 2);
//   return S;
// }

// const areaCircle = (R) => PI * R ** 2; // 2 - usul

// let check = areaCircle(3);
// console.log(check);

// ----- Func6 ----- //

// function sumRange(A, B) {
//   if (A < B) {
//     let sum = 0;
//     for (let i = A; i <= B; i++) {
//       sum += i;
//     }
//     return sum;
//   } else {
//     return 0;
//   }
// }

// let check = sumRange(10,9);
// console.log(check);

// ----- Func7 ----- //

// function calc(A, B, S) {
//   if (S == "-") {
//     let min = A - B;
//     return min;
//   }

//   if (S == "+") {
//     let sum = A + B;
//     return sum;
//   }

//   if (S == "*") {
//     let mul = A * B;
//     return mul;
//   }

//   if (S == "/") {
//     let dvd = A / B;
//     return dvd;
//   }
// }

// let check = calc(10, 2, "/");
// console.log(check);

// ----- Func8 ----- //

// function isEven(K) {
//   if (K % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let check = isEven(-1);
// console.log(check);

// ----- Func9 ----- //

// function sortABC(a, b, c) {
//   let max = Math.max(a, b, c);
//   let min = Math.min(a, b, c);
//   let middle = a + b + c - max - min;
//   console.log(min, middle, max);
// }

// sortABC(4, 2, 1);

// ----- Func10 ----- //

// ----- Func11 ----- //

// function isPrime(N) {
//   if (N < 2) {
//     return false;
//   }

//   if (N == 2) {
//     return true;
//   }

//   if (N % 2 == 0) {
//     return false;
//   }

//   for (let i = 3; i <= Math.sqrt(N); i += 2) {
//     if (N % i == 0) {
//       return false;
//     }
//   }

//   return true;
// }

// let check = isPrime(12);
// console.log(check);

// ----- Func12 ----- //

// function isPrime(N) {

// let count = 1;
// let countFalse = 0;

//   if (N < 2) {
//     return false;
//   }

//   for (let i = 3; i <= N; i += 2) {
//     if (i % 3 == 0 && i != 3) {
//       countFalse++;
//     }
//     count++;
//   }

//   let finalCount = (count - countFalse);
//   return finalCount;
// }

// let check = isPrime(13);
// console.log("Tub sonlar soni =", check);

// ----- Func13 ----- //

// function digitNth(K, N) {
//   let show = Math.trunc(K);
//   // for (let i = K; i >= 1; i /= 10) {
//   //   let rest = Math.trunc(i);
//   //   console.log(rest);
//   // }

//   if (N > K) {
//     return -1;
//   }
// }

// let check = digitNth(263, 4);
// console.log(check);

// ----- Func14 ----- //

// function inverseNumber(N) {
//   return parseInt(String(N)
//   .split("")
//   .reverse("")
//   .join(""));
// }

// let check = inverseNumber(2372);
// console.log(check);

// ----- Func15 ----- //

// ----- Func16 ----- //

// function factorial(N) {
//   let mul = 1;
//   for (let i = 1; i <= N; i++) {
//     mul *= i;
//   }

//   if (N < 0) {
//     return -1;
//   }
//   return mul;
// }

// let check = factorial(-10);
// console.log("Natija =", check);

// ----- Func17 ----- //

// function getSum3(N) {
//   let sum = 0;
//   for (let i = 1; i <= N; i++) {
//     if (i % 3 == 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// let check = getSum3(15);
// console.log("Natija =", check);

// ----- Func18 ----- //

// function sumOddEven(N) {
//   let oddSum = 0;
//   let evenSum = 0;
//   for (let i = 1; i <= N; i++) {
//     if (i % 2 == 0) {
//       evenSum += i;
//     } else {
//       oddSum += i;
//     }
//   }
//   console.log(evenSum, oddSum);
// }

// sumOddEven(11);

// ----- Func19 ----- //

// function invertTime(H, M, S) {
//   let H1 = 3600 * H;
//   let M1 = 60 * M;
//   let S1 = S;
//   console.log(H1 + M1 + S1);
// }

// invertTime(1, 6, 40);

// ----- Func20 ----- //

// function decTime(H, M, S) {
//   S--;
//   let addZero = 0;

//   if (S < 0) {
//     M--;
//     S = 59;
//   }

//   if (M < 0) {
//     H--;
//     M = 59;
//   }

//   if (H < 0) {
//     H = 23;
//   }

// ----- Func21 ----- //

// function isLeapYear(Y) {
//   if (Y % 4 == 0 && Y % 100 != 0 || Y % 400 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const isLeapYear = (Y) => Y % 4 == 0 && Y % 100 != 0 || Y % 400 == 0;  // 2-usul

// let check = isLeapYear(14);
// console.log(check);

//   console.log( H, ":", M, ":", S);
// }

// decTime(1, 0, 0);

// ----- Func22 ----- //

// const isLeapYear = (Y) => (Y % 4 == 0 && Y % 100 != 0) || Y % 400 == 0;

// function monthDays(M, Y) {
//   if (isLeapYear(Y) && M == 2) {
//     return 29;
//   }

//   if (M > 12) {
//     return "N/A";
//   }

//   switch (M) {
//     case 2:
//       return 28;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//       return 30;
//     default:
//       return 31;
//   }
// }

// let check = monthDays(12, 390);
// console.log(check);


// ----- Func23 ----- //

// function prevDate (D, M, Y) {
//   D--;
//   if (D < 1) {
//     M--;
//     D = 31;
//   }

//   if (M < 1) {
//     Y--;
//     M = 12;
//   }
  
//   return D + "." + M + "." + Y;
// }

// let check = prevDate(1, 12, 2000);
// console.log(check); 
