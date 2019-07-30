import React from 'react'

import { createStyles, makeStyles } from '@material-ui/styles'

import { Grid, Paper, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'lightpink',
    },
    key: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    used: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: 'red',
    },
  })
)

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const firstRow = alphabet.slice(0, 13)
const secondRow = alphabet.slice(13)

const Key: React.FC<{ letter: string; guesses: string[] }> = ({
  letter,
  guesses,
}) => {
  const classes = useStyles()

  return (
    <Grid item={true}>
      {guesses.includes(letter.toLowerCase()) ? (
        <Paper className={classes.used}>{letter}</Paper>
      ) : (
        <Paper className={classes.key}>{letter}</Paper>
      )}
    </Grid>
  )
}

const Alphabet: React.FC<{ guesses: string[] }> = ({ guesses }) => {
  return (
    <Grid item={true} xs={12}>
      <Grid container={true} spacing={3} justify="center">
        {firstRow.map((char, index) => (
          <Key key={index} letter={char} guesses={guesses} />
        ))}
      </Grid>
      <Grid container={true} spacing={3} justify="center">
        {secondRow.map((char, index) => (
          <Key key={index} letter={char} guesses={guesses} />
        ))}
      </Grid>
    </Grid>
  )
}

export default Alphabet
