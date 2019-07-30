function getWords(cb: (words: string[]) => void): void {
  cb(['food', 'drink', 'tool'])
}

function getRandomWord(): string {
  let word = ''
  getWords(words => {
    const randomWord = words[Math.floor(Math.random() * words.length)]
    word = randomWord.toUpperCase()
  })
  return word
}

export default getRandomWord
