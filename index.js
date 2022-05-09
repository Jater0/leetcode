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
    case 4:
      const { leetcode4 } = require("./console");
      log(leetcode4());
      break;
    case 442:
      const { leetcode442 } = require("./console");
      log(leetcode442());
      break;
    default:
      log("Index not found");
  }
}

function log(value) {
  console.log(value);
}