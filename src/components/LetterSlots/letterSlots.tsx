import React from 'react'

import { Grid, Paper, Theme } from '@material-ui/core'

import { createStyles, makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    letter: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
  })
)

const Slot: React.FC<{ letter: string; guesses: string[] }> = ({
  letter,
  guesses,
}) => {
  const classes = useStyles()

  return (
    <Grid item={true}>
      <Paper className={classes.letter}>
        {guesses.includes(letter.toLowerCase()) ? letter : '*'}
      </Paper>
    </Grid>
  )
}

const LetterSlots: React.FC<{ word: string; guesses: string[] }> = ({
  word,
  guesses,
}) => {
  return (
    <Grid container={true} spacing={3} justify="center">
      {word.split('').map((letter, index) => (
        <Slot key={index} letter={letter} guesses={guesses} />
      ))}
    </Grid>
  )
}

export default LetterSlots
