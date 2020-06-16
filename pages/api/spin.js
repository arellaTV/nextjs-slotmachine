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

export default function handler(req, res) {
  res.status(200).json({})
}