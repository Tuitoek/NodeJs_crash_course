// import fs from "fs";
import fs from "fs/promises";

// // Read file - callback
// fs.readFile("./test.txt", "utf8", (err, data) => {
//   if (err) throw err;
//     console.log(data);
// });

// // Read file - synchronours
// const data = fs.readFileSync("./test.txt", "utf8");
// console.log(data);

// // Read file - promise
// fs.readFile("./test.txt", "utf8")
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

//Readfile - async/await
const readFileAsync = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

// Write File
const writeFileAsync = async () => {
  try {
    await fs.writeFile("./test.txt", "Hello, I am a Node.js developer!");
    console.log("File written to....");
  } catch (err) {
    console.error(err);
  }
};

// Append File
const appendFileAsync = async () => {
  try {
    await fs.appendFile("./test.txt", "\nThis is an appended text.");
    console.log("File appended to....");
  } catch (err) {
    console.error(err);
  }
};


readFileAsync();
writeFileAsync();
appendFileAsync();