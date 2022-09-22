// 객체 생성 방법
const obj1 = new Object();
const obj2 = {};
const obj = { name: "강한희", company: "kakao" };
console.log(obj1);
console.log(obj2);

// 객체에 값 추가하는 방법
obj["email"] = "aaa@gmail.com";
obj.phone = "01012345678";
console.log(obj);

// 객체에 값 삭제하는 방법
delete obj.phone;
console.log(obj);

console.log("email" in obj);
console.log("old" in obj);

console.log(Object.keys(obj));
console.log(Object.values(obj));

// 객체를 순회하는 방법
// for in
for (const key in obj) {
  console.log(key, obj[key]);
}
