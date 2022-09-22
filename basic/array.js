const arr1 = new Array();
const arr2 = [];
const arr3 = [1, 2, 3, 4, 5];
const arr4 = new Array(5);
const arr5 = new Array(5).fill(6);
const arr6 = Array.from(Array(6), function (v, k) {
  return k + 1;
});
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);
// console.log(arr5);
// console.log(arr6);

const arr = [1, 2, 3, 4, 5];

// console.log(arr.length);

// // length 길이 직접 조작가능하지만, 비추
// arr.length = 3;
// console.log(arr); // 뒤 요소들이 삭제됨
// arr.length = 10;
// console.log(arr); // 나머지 빈 값으로 추가됨

// // 배열의 함수들
// // join 함수 : 배열을 하나의 문자열로 합친다.
// console.log(arr.join(","));
// // reverse
// console.log(arr.reverse());

// const arr7 = [1, 2, 3, 4, 5];
// const arr8 = [7, 8, 9, 10];

// // concat : 배열을 합친다.
// console.log(arr7.concat(arr8));

// // 배열의 요소를 추가, 삭제
// // push, pop
// arr.push(7);
// arr.push(7, 8, 9);
// console.log(arr);
// arr.pop(); // 9
// arr.pop(); // 8
// console.log(arr.pop()); // 7
// console.log(arr);

// // 첫 번째에 있는 요소 추가, 삭제
// // shift, unshift
// arr.shift();
// arr.shift();
// console.log(arr);
// arr.unshift(10);
// console.log(arr);

// // slice : 중간에 있는 요소 분리해서 보여준다.
// console.log(arr.slice(2, 4));
// console.log(arr);

// // splice : 중간에 있는 요소를 삭제한다.
// arr.splice(2, 2);
// console.log(arr);

// // 배열을 순회하는 방법
// for (let i = 0; i < 6; i++) {
//   console.log(arr[i]);
// }

// // 최신 자바스크립트 문법 추천 방법!
// // for of
// for (const item of arr) {
//   console.log(item);
// }

// 배열은 객체처럼 사용 가능하지만 비추
console.log(typeof arr);

arr["key"] = "value";
console.log(arr);
console.log(arr.length); // 배열의 길이는 변함이 없음
