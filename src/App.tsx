import React, { useEffect, useState } from 'react'

import StoryProgress from 'components/StoryProgress'
import StoryCard from 'components/StoryCard'
import StoryCardSecond from 'components/StoryCardSecond'

import classes from './App.module.css'

const App = () => {
  const [animationPaused, setAnimationPaused] = useState(false)
  const [cardIndex, setCardIndex] = useState(0)

  const handleTouch = () => {
    setAnimationPaused((prevState) => !prevState)
  }

  const handleStoryFinish = () => {
    setCardIndex((prevState) => prevState + 1)
  }

  useEffect(() => {
    window.addEventListener('mousedown', handleTouch)
    window.addEventListener('mouseup', handleTouch)
    window.addEventListener('touchstart', handleTouch)
    window.addEventListener('touchend', handleTouch)

    return () => {
      window.removeEventListener('mousedown', handleTouch)
      window.removeEventListener('mouseup', handleTouch)
      window.removeEventListener('touchstart', handleTouch)
      window.removeEventListener('touchend', handleTouch)
    }
  }, [])

  return (
    <div className={classes.app}>
      <StoryProgress isPaused={animationPaused} />
      {cardIndex === 0 && (
        <StoryCard isPaused={animationPaused} onFinish={handleStoryFinish} />
      )}
      {cardIndex === 1 && (
        <StoryCardSecond isPaused={animationPaused} onFinish={handleStoryFinish} />
      )}
      {cardIndex === 2 && (
        <div className={classes.replayButton}>
          <button type="button" onClick={() => window.location.reload()}>Replay</button>
        </div>
      )}
    </div>
  )
}

export default App
