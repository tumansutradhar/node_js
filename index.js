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

// console.log(__filename);

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

