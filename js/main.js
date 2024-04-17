const wordList = ["jambon", "saucisson", "ordinateur", "ecran"];

const getWord = (wordList) => {
  const index = Math.floor(Math.random() * wordList.length);
  console.log(index);
  return wordList[index];
};

console.log(getWord(wordList));
