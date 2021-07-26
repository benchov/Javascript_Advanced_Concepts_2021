const compose = (func1, func2) => (data) => func1(func2(data));
const multiplier = (num) => num * 3;
const absoluter = (num) => Math.abs(num);
const multiplyBy3AndAbsolute = compose(multiplier, absoluter);

console.log(multiplyBy3AndAbsolute(-7));
