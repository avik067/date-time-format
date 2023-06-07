const add = require("date-fns/addDays");

let f = (x) => {
  const result = add(new Date(2020, 7, 22), x);

  console.log(
    `${result.getDate()}-${result.getMonth() + 1}-${result.getFullYear()}`
  );
  return `${result.getDate()}-${result.getMonth() + 1}-${result.getFullYear()}`;
};
f(10);
module.exports = f;
