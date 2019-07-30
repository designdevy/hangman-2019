import React from 'react'

import { Grid, Theme } from '@material-ui/core'

import { createStyles, makeStyles } from '@material-ui/styles'

import { Alphabet, LetterSlots, Status } from 'components'

import { getRandomWord } from 'utils'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100vw',
      height: '100vh',
      padding: '2em',
    },
    container: {
      height: '100%',
    },
    item: {
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  })
)

const word = getRandomWord()

const App: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid className={classes.container} container={true}>
        <Grid
          container={true}
          justify="center"
          alignItems="center"
          xs={12}
          className={classes.item}
        >
          <Status word={word} guesses={['f', 'a', 'o']} />
        </Grid>
        <Grid
          container={true}
          xs={12}
          className={classes.item}
          alignItems="center"
        >
          <LetterSlots word={word} guesses={['f', 'a', 'o']} />
        </Grid>
        <Grid
          container={true}
          xs={12}
          className={classes.item}
          alignItems="center"
        >
          <Alphabet guesses={['f', 'a', 'o']} />
        </Grid>
      </Grid>
    </div>
  )
}

export default App

// getRandomWord(word => {
//   document.addEventListener('click', event => {
//     if (isStillPlaying(word, guesses) && event.target.tagName === 'BUTTON') {
//       guesses.push(event.target.dataset.char)
//       drawGame(word, guesses)
//     }
//   })
