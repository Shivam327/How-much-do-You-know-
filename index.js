const readlineSync = require("readline-sync");
const chalk = require("chalk");
const userName = readlineSync.question("Please Enter Your Name : ");
console.log("Welcome ", chalk.redBright.bold.italic(userName));
readlineSync.question("\nPress Enter to Start Quiz");
console.log(chalk.underline("Please Select one from the following"));

let score = 0;

const questions = [
  {
    question:
      "\n1. How many countries border India?  \n \n a. 9 \n b. 10 \n c. 7 \n d. 8 ",
    answer: "c",
  },
  {
    question:
      "2. What is the capital of India? \n \n a. Delhi \n b. Mumbai \n c. Chennai \n d. Pune",
    answer: "a",
  },
  {
    question:
      "3. India's largest city by population. \n \n a. Chennai \n b. Pune  \n c. Delhi  \n d. Mumbai",
    answer: "a",
  },
  {
    question:
      "4. 27 States and 8 Union Territories\n \n a. 27 States and 8 Union Territories \n b. 29 States and 7 Union Territories \n c. 27 States and 6 Union Territories \n d. 23 States and 10 Union Territories",
    answer: "b",
  },
  {
    question:
      "5. Hindi Divas celebrate in India on ? \n \n a. 14th September \n b. 12th April \n c. 10th April \n d. 14th December",
    answer: "a",
  },
  {
    question:
      "6. What was the code name of the first nuclear tests conducted by India in on 18 May 1974, in Pokhran, Rajasthan ? \n \n a. Operation Ashwamedh \n b. Smiling Buddha \n c. Operation Shakti \n d. Operation Vijay",
    answer: "b",
  },
  {
    question:
      "7. India won its first Olympic hockey gold in? \n \n a. 1930 \n b. 1932 \n c. 1927 \n d. 1928",
    answer: "d",
  },
  {
    question:
      "8. The first IIT was established in1951 known as \n \n a. IIT Delhi \n b. IIT Kanpur \n c. IIT Kharagpur \n d. IIT Madras",
    answer: "c",
  },
  {
    question:
      "9. On which spacecraft did Rakesh Sharma make his historic trip to Space? \n \n a. Salyut 7 \n b. Soyuz-T \n c. Apollo 11 \n d. Progress 1",
    answer: "b",
  },
  {
    question:
      "10. What is the name of India's National Aquatic Animal? \n \n a. River Dolphin \n b. Crocodile \n c. Green Frog \n d. Katla Fish",
    answer: "a",
  },
];

function play(question, answer) {
  let userAnswer = readlineSync.question(`${question}\n`);
  if (userAnswer === answer) {
    console.log("                 ");
    console.log("✔️ ");
    score = score + 1;
    console.log(
      chalk.green(
        "Horray, Right Answer your Score Goes Up : ",
        chalk.bold(score)
      )
    );
    console.log("");
  } else {
    console.log("");
    console.log("❌ ");
    score = score - 1;
    console.log(
      chalk.red(
        "Oops, Wrong Answer your Score is Going Down :",
        chalk.bold(score)
      )
    );
    console.log("");
  }
}

for (let i = 0; i < questions.length; i++) {
  let currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log(
  chalk.green.bold(
    "Thank you for the Playing Hope you attended at its Best.....\n&",
    userName,
    "And Your Total Score is ",
    score
  )
);
