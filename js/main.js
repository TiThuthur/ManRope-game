const wordSpace = document.getElementById("js-word");
const lettersInputs = document.querySelectorAll(".letter-button");
const lettersUsed = document.querySelector(".letter-used");
const scoreElement = document.getElementById("score");
const messageElement = document.getElementById("message");

let score = 11;
const wordList = [
  "jambon",
  "saucisson",
  "ordinateur",
  "ecran",
  "pain",
  "programmation",
];

const getWord = (wordList) => {
  const index = Math.floor(Math.random() * wordList.length);
  return wordList[index];
};

const hideLetter = (word) => {
  const hideWord = Array.from(word);
  console.log(word);
  for (const index in hideWord) {
    hideWord[index] = "_";
  }
  console.log(hideWord);
  return hideWord;
};
const renderWord = (wordList) => {
  wordSpace.innerText = wordList.join("");
};
const happendLetter = (letter) => {
  const letterElement = document.createElement("div");
  letterElement.innerHTML = letter.toUpperCase();
  lettersUsed.append(letterElement);
};
const checkWord = (letter, wordList) => {
  let indice = [];
  let index = wordList.indexOf(letter);
  while (index != -1) {
    indice.push(index);
    index = wordList.indexOf(letter, index + 1);
  }
  return indice;
};
const letterList = [];
const word = Array.from(getWord(wordList));

let hideWord = hideLetter(word);
console.log(word.join(""));
renderWord(hideWord);

for (const input of lettersInputs) {
  input.addEventListener("click", (e) => {
    let letter = e.target.id.toLowerCase();
    const indice = checkWord(letter, word);
    console.log(indice)
    for (const i of indice) {
      hideWord[i] = letter;
    }
    if (indice.length!==0) {
      messageElement.innerText="Bravo !"
    }
    renderWord(hideWord);
    if (letterList.find((element) => element === letter) === undefined) {
      happendLetter(letter);
      letterList.push(letter);
    }

    if (word.find((element) => element === letter) === undefined) {
      /**gestion du @score */
      messageElement.innerText="Echec"
      score -= 1;
      scoreElement.innerText = score;
    }

    if (score <= 0) {
      for (const key in lettersInputs) {
        /**désactivation de bouton dans @lettersInputs en cas de défaite */
        lettersInputs[key].disabled = true;
      }
      messageElement.innerText = "Vous avez perdu";
    }
  });
}
