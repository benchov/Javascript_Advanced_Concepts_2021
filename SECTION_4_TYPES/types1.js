// Primitive-types
console.log(typeof 5); // r => number
console.log(typeof true); // r => boolean
console.log(typeof undefined); // r => undefined  (abscence of definition)
console.log(typeof "this is it"); // r => string
console.log(typeof null); // r => object , which is a bug from the creator of JS , (absence of value)
console.log(typeof Symbol("it is that")); // r => symbol

// Non-primitive types
console.log(typeof {}); // r => object
console.log(typeof []); // r => object
console.log(typeof function () {}); // r => function

// Functions are objects in JS:
function a() {
  return 5;
}
a.hi = "hello";
console.log(a.hi); // r => 'hello'
