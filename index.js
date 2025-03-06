// console.log("Hello World");

// --------------------------------------------------

// let a = 10;
// let b = 20;
// let c = a + b;

// console.log(c);

// --------------------------------------------------

// const app = require("./app");

// console.log(app.a);
// console.log(app.b);
// console.log(app.c);
// console.log(app.z());
// console.log(app);

// --------------------------------------------------

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumber = arr.filter((value) => {
//     console.log(value);
//     return value % 2 === 0;
// });

// console.log(evenNumber);

// --------------------------------------------------

// const fs = require("fs");

// fs.writeFileSync("hello.txt", "Hello World");

// console.log(__fileName);

// const gs = require("fs").writeFileSync;

// gs("abc.txt", "abc");

// --------------------------------------------------

// const http = require("http");

// http.createServer((req, res) => {
//     res.write("<h1>Hello World</h1>");
//     res.end();
// }).listen(3000, () => {
//     console.log("Server is running on port 3000");
// });

// --------------------------------------------------

// const colors = require("colors/safe");

// function printColoredText() {
//     console.log("------------ Styled Text Output ------------");
//     console.log(colors.green("hello"));
//     console.log(colors.red.underline("I like cake and pies"));
//     console.log(colors.inverse("Inverse the color"));
//     console.log(colors.rainbow("OMG Rainbows!"));
//     console.log(colors.trap("Run the trap"));
//     console.log("--------------------------------------------");
// }

// printColoredText();

// --------------------------------------------------

// import("chalk").then((chalk) => {
//     const c = chalk.default;

//     console.log("------------ Chalk Demo ------------");
//     console.log(c.blue("Hello World!"));
//     console.log(c.blue("Hello") + " World" + c.red("!"));
//     console.log(c.blue.bgRed.bold("Hello world!"));
//     console.log(c.blue("Hello", "World!", "Foo", "bar", "biz", "baz"));
//     console.log(c.red("Hello", c.underline.bgBlue("world") + "!"));
//     console.log(c.green("I am a green line " + c.blue.underline.bold("with a blue substring") + " that becomes green again!"));
//     console.log(`${c.bold("System Stats:")}
// CPU:  ${c.red.bold("90%")}
// RAM:  ${c.green.bold("40%")}
// DISK: ${c.yellow.bold("70%")}
//     `);
//     console.log(c.rgb(123, 45, 67).underline("Underlined reddish color"));
//     console.log(c.hex("#DEADED").bold("Bold gray!"));
//     console.log("----------------------------------------");
// });

// --------------------------------------------------

// console.log("------------ Npm Nodemon ------------");
// console.warn("Hello World");
// console.log("Hello World");
// console.log("----------------------------------------");

// --------------------------------------------------

// const http = require("http");
// const data = require("./data");

// http.createServer((req, res) => {
//     res.writeHead(200, {
//         "Content-Type": "application/json",
//     });
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(3000);

// --------------------------------------------------

// console.log(process.argv[0]);

// const fs = require("fs");
// const input = process.argv;

// const command = input[2];
// const fileName = input[3];
// const content = input[4];

// if (command === "add") {
//     if (!fileName || !content) {
//         console.log("Usage: node script.js add <fileName> <content>");
//         process.exit(1);
//     }
//     fs.writeFileSync(fileName, content);
//     console.log(`File '${fileName}' created with content: "${content}"`);
// } else if (command === "remove") {
//     if (!fileName) {
//         console.log("Usage: node script.js remove <fileName>");
//         process.exit(1);
//     }
//     try {
//         fs.unlinkSync(fileName);
//         console.log(`File '${fileName}' has been removed.`);
//     } catch (error) {
//         console.error(`Error: ${error.message}`);
//     }
// } else {
//     console.log("Invalid command! Use 'add' or 'remove'.");
// }

// --------------------------------------------------

// const fs = require("fs");
// const path = require("path");
// const dirName = path.join(__dirname, "files");

// console.log("Target directory:", dirName);

// if (!fs.existsSync(dirName)) {
//     fs.mkdirSync(dirName);
//     console.log("Directory created:", dirName);
// }

// for (let i = 1; i <= 5; i++) {
//     const filePath = path.join(dirName, `file${i}.txt`);
//     fs.writeFileSync(filePath, `This is file ${i}`);
//     console.log(`Created: ${filePath}`);
// }

// fs.readdir(dirName, (error, files) => {
//     if (error) {
//         console.error("Error reading directory:", error.message);
//         return;
//     } if (files.length === 0) {
//         console.log("No files found in the directory.");
//     } else {
//         console.log("Files in directory:", files);
//     }
// });

// --------------------------------------------------

// const fs = require("fs");
// const path = require("path");
// const dirName = path.join(__dirname, "files");
// const filePath = path.join(dirName, "file6.txt");
// const oldPath = path.join(dirName, "file6.txt");
// const newPath = path.join(dirName, "newFile6.txt");

// fs.writeFileSync(filePath, "This is file 6");

// fs.appendFile(filePath, "This is a new version of file 6.", "utf8", (err) => {
//     if (err) {
//         console.error("Error appending to file:", err);
//         return;
//     }
// });

// fs.readFile(filePath, "utf8", (err, item) => {
//     if (err) {
//         console.error("Error reading file:", err);
//         return;
//     }
//     console.log(item);
// });

// fs.rename(oldPath, newPath, (err) => {
//     if (err) {
//         console.error("Error renaming file:", err);
//         return;
//     }
//     console.log("File renamed successfully!");
// });

// fs.unlinkSync(newPath);

// --------------------------------------------------

// let a = 10;
// let b = 10;

// setTimeout(() => {
//     b = 20;
// }, 2000);

// console.log(a + b);

// --------------------------------------------------

// let i = 10;
// let n = 10;

// let waitingData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(20);
//     }, 2000);
// });

// waitingData.then((d) => {
//     n = d;
//     console.log(i + n);
// });

// --------------------------------------------------
