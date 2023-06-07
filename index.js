const add = require("date-fns/addDays");
let f = (x) => {
  const result = add(new Date(2020, 8, 22), x);

  //   console.log(
  //     `${result.getDay()}-${result.getMonth()}-${result.getFullYear()}`
  //   );
  return `${result.getDay()}-${result.getMonth()}-${result.getFullYear()}`;
};
// f(10);
module.exports = f;
