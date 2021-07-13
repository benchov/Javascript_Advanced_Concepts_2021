// Multiplication table for number
/* _________________________________ */
// my solution =>
const multiTable = (number) => {
  let table = "";

  for (let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}${i < 10 ? "\n" : ""}`;
  }

  return table;
};

// best solution
function multiTable(n) {
  return [...Array(10)]
    .map((_, i) => `${i + 1} * ${n} = ${n * i + n}`)
    .join("\n");
}
