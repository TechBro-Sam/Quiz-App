export const jsQuizz = {
  questions: [
    {
      question: "Which company developed JavaScript?",
      choices: ["Netscape", "Microsoft", "Google", "Oracle"],
      type: "MCQs",
      correctAnswer: "Netscape",
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      choices: ["//", "/* */", "#", "<!-- -->"],
      type: "MCQs",
      correctAnswer: "//",
    },
    {
      question: "Which method is used to round a number to the nearest integer?",
      choices: ["Math.floor()", "Math.ceil()", "Math.round()", "Math.abs()"],
      type: "MCQs",
      correctAnswer: "Math.round()",
    },
    {
      question: "What is the output of '2' + 2 in JavaScript?",
      choices: ["22", "4", "undefined", "NaN"],
      type: "MCQs",
      correctAnswer: "22",
    },
    {
      question: "Which of the following is not a JavaScript data type?",
      choices: ["String", "Number", "Boolean", "Character"],
      type: "MCQs",
      correctAnswer: "Character",
    },
    {
      question: "Which method is used to create a new array from an existing array?",
      choices: ["push()", "filter()", "splice()", "map()"],
      type: "MCQs",
      correctAnswer: "map()",
    },
    {
      question: "How do you declare a variable in JavaScript?",
      choices: ["var", "let", "const", "All of the above"],
      type: "MCQs",
      correctAnswer: "All of the above",
    },
    {
      question: "What does 'this' keyword refer to in JavaScript?",
      choices: ["Global object", "Current object", "Previous object", "None of the above"],
      type: "MCQs",
      correctAnswer: "Current object",
    },
    {
      question: "Which method converts a JSON string to a JavaScript object?",
      choices: ["JSON.stringify()", "JSON.parse()", "parseJSON()", "toJSON()"],
      type: "MCQs",
      correctAnswer: "JSON.parse()",
    },
    {
      question: "Which function is used to add elements to an array?",
      choices: ["push()", "pop()", "shift()", "unshift()"],
      type: "MCQs",
      correctAnswer: "push()",
    },
    {
      question: "Which of the following is a JavaScript framework?",
      choices: ["Angular", "Laravel", "Django", "Spring"],
      type: "MCQs",
      correctAnswer: "Angular",
    },
    {
      question: "Which method is used to remove whitespace from both ends of a string?",
      choices: ["trim()", "slice()", "substr()", "replace()"],
      type: "MCQs",
      correctAnswer: "trim()",
    },
    {
      question: "What will 'typeof []' return in JavaScript?",
      choices: ["object", "array", "null", "undefined"],
      type: "MCQs",
      correctAnswer: "object",
    },
    {
      question: "What is the difference between '==' and '===' in JavaScript?",
      choices: [
        "'==' checks only value, '===' checks value and type",
        "Both are the same",
        "'==' checks value and type, '===' checks only value",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "'==' checks only value, '===' checks value and type",
    },
    {
      question: "Which of the following is a primitive data type in JavaScript?",
      choices: ["Object", "Array", "String", "Date"],
      type: "MCQs",
      correctAnswer: "String",
    },
    {
      question: "Which keyword is used to define a constant in JavaScript?",
      choices: ["let", "var", "const", "constant"],
      type: "MCQs",
      correctAnswer: "const",
    },
    {
      question: "Which method is used to remove the last element from an array?",
      choices: ["pop()", "shift()", "slice()", "splice()"],
      type: "MCQs",
      correctAnswer: "pop()",
    },
    {
      question: "What is the purpose of the 'forEach' method in JavaScript?",
      choices: [
        "Iterate over each element in an array",
        "Add elements to an array",
        "Filter elements in an array",
        "Sort elements in an array",
      ],
      type: "MCQs",
      correctAnswer: "Iterate over each element in an array",
    },
    {
      question: "What will the 'typeof null' return?",
      choices: ["null", "undefined", "object", "boolean"],
      type: "MCQs",
      correctAnswer: "object",
    },
    {
      question: "Which method can be used to combine two or more arrays?",
      choices: ["concat()", "slice()", "splice()", "join()"],
      type: "MCQs",
      correctAnswer: "concat()",
    },
    {
      question: "Which method is used to convert a number to a string in JavaScript?",
      choices: ["toString()", "parseInt()", "toFixed()", "valueOf()"],
      type: "MCQs",
      correctAnswer: "toString()",
    },
    {
      question: "What will the result of '3 + 2 + '7'' be?",
      choices: ["57", "12", "327", "NaN"],
      type: "MCQs",
      correctAnswer: "57",
    },
    {
      question: "How do you declare an arrow function in JavaScript?",
      choices: [
        "() => {}",
        "function() {}",
        "(arrow) => {}",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "() => {}",
    },
    {
      question: "What does NaN stand for in JavaScript?",
      choices: ["Not a Number", "Null and None", "Not Applicable", "Number and Null"],
      type: "MCQs",
      correctAnswer: "Not a Number",
    },


  ]
};

export const resultIntialState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0
};
