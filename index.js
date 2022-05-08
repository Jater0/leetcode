const [,, leetcode, index] = process.argv;

if (typeof leetcode === "string") {
  const number = Number(leetcode);
  switch (number) {
    case 1:
      const { leetcode1 } = require("./console");
      log(leetcode1(Number(index)))
      break;
    case 2:
      const { leetcode2 } = require("./console");
      log(leetcode2());
      break;
    default:
      log("Index not found")
  }
}

function log(value) {
  console.log(value);
}