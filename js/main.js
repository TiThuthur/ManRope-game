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
  for (let i = 0; i < hideWord.length; i++) {
    hideWord[i] = "_";
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
renderWord(hideWord);

for (const input of lettersInputs) {
  input.addEventListener("click", (e) => {
    let letter = e.target.id.toLowerCase();

    const indice = checkWord(letter, word);

    if (indice.length !== 0) {
      for (const i of indice) {
        hideWord[i] = letter;
      }
      messageElement.innerText = "vous avez trouvé une lettre.";
    }

    renderWord(hideWord);

    if (letterList.find((element) => element === letter) === undefined) {
      happendLetter(letter);
      letterList.push(letter);
    }

    if (word.find((element) => element === letter) === undefined) {
      /**gestion du @score */
      messageElement.innerText = "moins 1 point.";
      score -= 1;
      scoreElement.innerText = score;
    }
    console.log(hideWord);
    console.log(word);
    console.log(word === hideWord);
    if (score <= 0) {
      for (const key in lettersInputs) {
        /**désactivation de bouton dans @lettersInputs en cas de défaite */
        lettersInputs[key].disabled = true;
      }
      messageElement.innerText = "Vous avez perdu";
    } else if (word === hideWord) {
      for (const key in lettersInputs) {
        /**désactivation de bouton dans @lettersInputs en cas de défaite */
        lettersInputs[key].disabled = true;
      }
      messageElement.innerText = "Vous avez gagné !";
    }
  });
}
