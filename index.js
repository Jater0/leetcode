const [,, leetcode, index] = process.argv;

if (typeof leetcode === "string") {
  const number = Number(leetcode);
  switch (number) {
    case 1:
      const { leetcode1 } = require("./console");
      log(leetcode1(Number(index)))
      break;
    default:
      log("Index not found")
  }
}

function log(value) {
  console.log(value);
}