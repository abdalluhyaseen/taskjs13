const convertStringToArray = (text) => text.split(" ");
const phrase = "Orange Jordan";
const arrayResult = convertStringToArray(phrase);
console.log(arrayResult);
// ####################################################
//task 2
const maskPhoneNumber = (number) => "*".repeat(7) + number.slice(7);
const phoneInput = "0776807777";
console.log(maskPhoneNumber(phoneInput));
// ####################################################
//task3/
const maskEmailAddress = (email) => {
  const [username, domain] = email.split("@");
  const maskedUsername = username.slice(0, 4) + "…";
  return `${maskedUsername}@${domain}`;
};
const emailInput = "orange_academy@orange.jo";
console.log(maskEmailAddress(emailInput));
// ####################################################
//task 4
const capitalizeWords = (sentence) =>
  sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
const sentenceInput = "coding academy by orange";
console.log(capitalizeWords(sentenceInput));
// ####################################################
//task 5
const reverseDigits = (number) =>
  parseInt(number.toString().split("").reverse().join(""), 10);
const numberInput = 92485;
console.log(reverseDigits(numberInput));
// ####################################################
//task 6
const swapValues = (value1, value2) => {
  [value1, value2] = [value2, value1];
  return { value1, value2 };
};
let swappedResult = swapValues(3, 4);
console.log(swappedResult);
// ####################################################
//task 7
const removeCharacterAt = (text, position) =>
  text.slice(0, position) + text.slice(position + 1);
const wordInput = "Orange";
const charIndex = 3;
console.log(removeCharacterAt(wordInput, charIndex));
// ####################################################
//task 8
const combineStrings = (string1, string2) =>
  string1.slice(1) + string2.slice(1);
const firstString = "lora";
const secondString = "inge";
console.log(combineStrings(firstString, secondString));
// ####################################################
//task 9
const isCharAtEdge = (character, text) =>
  text.startsWith(character) || text.endsWith(character);
console.log(isCharAtEdge("z", "orange"));
console.log(isCharAtEdge("o", "orange"));
// ####################################################
//task 10
const splitAndCapitalize = (text) =>
  text.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1));
const capitalizedArrayInput = "Coding Academy by Orange";
console.log(splitAndCapitalize(capitalizedArrayInput));
// ####################################################
//task 11
const sortCharacters = (text) => text.split("").sort().join("");
const unorderedString = "Orange";
console.log(sortCharacters(unorderedString));
// ####################################################
//task 12
const calculateExecutionTime = (callback) => {
  const startTime = performance.now();
  callback();
  const endTime = performance.now();
  console.log(`${(endTime - startTime).toFixed(0)} ms`);
};
const sampleFunction = () => {
  for (let i = 0; i < 1000000; i++) {}
};
calculateExecutionTime(sampleFunction);
