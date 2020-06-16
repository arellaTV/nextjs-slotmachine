/* Symbol dictionary:
   Each letter signifies a symbol
*/
const letters = 'ABCDEFGHIJKLMNOP';

const selectRandomLetter = () => {
  return new Promise((resolve) => {
    const letterIndex = Math.floor(Math.random() * letters.length);
    const letter = letters[letterIndex];
    resolve(letter);
  });
}

export default async function handler(req, res) {
  let results = "";
  let firstLetter = "";
  let secondLetter = "";
  let thirdLetter = "";
  let threeInARow = true;

  await selectRandomLetter()
    .then((letter) => {
      results += letter;
      firstLetter = letter;
    })
    .then(selectRandomLetter)
    .then((letter) => {
      results += letter;
      secondLetter = letter;
      if (secondLetter !== firstLetter) {
        threeInARow = false;
      }
    })
    .then(selectRandomLetter)
    .then((letter) => {
      results += letter;
      thirdLetter = letter;
      if (thirdLetter !== secondLetter) {
        threeInARow = false;
      }
    });

  res.status(200).json({ results, threeInARow })
}