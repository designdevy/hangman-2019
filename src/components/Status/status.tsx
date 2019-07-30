import React from 'react'
import * as status from 'utils/status'

import { Typography } from '@material-ui/core'

const getMessage = (word: string, guesses: string[]) => {
  if (status.isGameWon(word, guesses)) {
    return 'You Win!'
  } else if (status.isGameOver(word, guesses)) {
    return 'Game Over!'
  } else {
    return `Guesses Remaining: ${status.guessesRemaining(word, guesses)}`
  }
}

const Status: React.FC<{ word: string; guesses: string[] }> = ({
  word,
  guesses,
}) => {
  return (
    <Typography variant="h2" gutterBottom={true}>
      {getMessage(word, guesses)}
    </Typography>
  )
}

export default Status
