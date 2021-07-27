const compose = (func1, func2) => (data) => func1(func2(data));
const multiplier = (num) => num * 3;
const absoluter = (num) => Math.abs(num);
const multiplyBy3AndAbsolute = compose(multiplier, absoluter);

console.log(multiplyBy3AndAbsolute(-7));

// WORKING OPTION FOR COMPOSITION WITH RAMDA
// Starting with deigned data object and send through the
// chain of functions which can conusme the data.

const getAndPass1 = (data) => {
  return Object.assign({}, data, { value: data.value + 2 });
};

const getAndPass2 = (data) => {
  return Object.assign({}, data, { error: "bad things happen" });
};

const getAndPass3 = (data) => {
  return Object.assign({}, { value1: data.value + data.value2, error: "" });
};

R.compose(getAndPass3, getAndPass2, getAndPass1)({ value: 1, value2: 4 }); //=> 7
