// If we really want to construct a true array not an object like array
// we need to do this:
Array.isArray([1, 2, 3]); // r => true
Array.isArray({}); // r => false

// Pass by reference issue Object/Arrays
var c = [1, 2, 3];
var z = c;
z.push(4);
console.log(c); // r => [1,2,3,4]
console.log(z); // r => [1,2,3,4]
// solution for this array issue
// =>
var c = [1, 2, 3];
var z = [].concat(c);
z.push(4);
console.log(c); // r => [1,2,3]
console.log(z); // r => [1,2,3,4]

var obj1 = { a: "a", b: "b" };
var obj2 = obj1;
obj2.b = "c";
console.log(obj1); // r => { a: 'a', b: 'c' }
console.log(obj2); // r => { a: 'a', b: 'c' }
// because the reference (the index of the memory )was passed it changes the
// original object (memory space)

let obj3 = { a: "a", b: "b" };
// solution for this object issue OBJECT.ASSIGN
let obj4 = Object.assign({}, obj3);
// solution for this object issue  SPREAD OPERATOR
let obj5 = { ...obj3 };
obj4.b = "c";
console.log(obj3); // r => { a: 'a', b: 'b' }
console.log(obj4); // r => { a: 'a', b: 'c' }
console.log(obj5); // r => { a: 'a', b: 'b' }

// nested object means, it has a new reference or index in the memory
// thats why it will by bump into the same issue

let obj = {
  a: "a",
  b: "b",
  c: {
    deep: "try and copy me",
  },
};
let clone = Object.assign({}, obj);
let clone2 = { ...obj };
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = "hahaha";
console.log(obj); // r => { a: 'a', b: 'b', c: { deep: 'hahaha' } }
console.log(clone); // r => { a: 'a', b: 'b', c: { deep: 'hahaha' } }
console.log(clone2); // r => { a: 'a', b: 'b', c: { deep: 'hahaha' } }
console.log(superClone); // r => { a: 'a', b: 'b', c: { deep: 'try and copy me' } }

// HIGHER ORDER FUNCTIONS
console.log(`

  HIGHER ORDER FUNCTIONS
          
            `);
const multiplyBy = (num1) => {
  return (num2) => {
    return num1 * num2;
  };
};

const multiplyByFive = multiplyBy(5);
console.log(multiplyByFive(5));
