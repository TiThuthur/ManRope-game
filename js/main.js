const wordSpace = document.getElementById("js-word");
const wordList = ["saucisson"];
// const wordList = [
//   "jambon",
//   "saucisson",
//   "ordinateur",
//   "ecran",
//   "pain",
//   "programmation",
// ];

const word = Array.from(getWord(wordList));

let hideWord = hideLetter(word);

checkWord("s", word);

let indice = [];
let index;
while(index!=1) {
indice.push(index);
index = word.indexOf("s", index +1);
}
console.log(indice);
