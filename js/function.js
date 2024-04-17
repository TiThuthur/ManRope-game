const getWord = (wordList) => {
  const index = Math.floor(Math.random() * wordList.length);
  return wordList[index];
};

const hideLetter = (word) => {
  const hideWord = Array.from(word);
  console.log(word);
  for (const letter in hideWord) {
    hideWord[letter] = "_";
  }
  console.log(hideWord);
  return hideWord;
};
const renderWord = (wordList) => {
  wordSpace.innerText = wordList;
};

const checkWord = (letter, wordList) => {
  const index = wordList.findIndex((index) => index === letter);
  console.log(index);
};
