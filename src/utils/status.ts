const MAX_INCORRECT_GUESSES: number = 5

export function guessesRemaining(word: string, guesses: string[]): number {
  const incorrectGuesses = guesses.filter(
    (char: string) => !word.includes(char)
  )
  return MAX_INCORRECT_GUESSES - incorrectGuesses.length
}

export function isGameWon(word: string, guesses: string[]) {
  return !word.split('').find((letter: string) => !guesses.includes(letter))
}

export function isGameOver(word: string, guesses: string[]) {
  return !guessesRemaining(word, guesses) && !isGameWon(word, guesses)
}

export function isStillPlaying(word: string, guesses: string[]) {
  return !isGameOver(word, guesses) && !isGameWon(word, guesses)
}
