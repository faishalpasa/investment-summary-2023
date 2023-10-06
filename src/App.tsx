import React, { useEffect, useState } from 'react'

import StoryProgress from 'components/StoryProgress'
import StoryCard from 'components/StoryCard'

import styles from './App.module.css'

const App = () => {
  const [animationPaused, setAnimationPaused] = useState(false)

  const handleTouch = () => {
    setAnimationPaused((prevState) => !prevState)
  }

  useEffect(() => {
    window.addEventListener('mousedown', handleTouch)
    window.addEventListener('mouseup', handleTouch)

    return () => {
      window.removeEventListener('mousedown', handleTouch)
      window.removeEventListener('mouseup', handleTouch)
    }
  }, [])

  return (
    <div className={styles.app}>
      <StoryProgress isPaused={animationPaused} />
      <StoryCard isPaused={animationPaused} />
    </div>
  )
}

export default App
