import React from 'react'

import classes from './storyProgress.module.css'

interface StoryProgressProps {
  isPaused: boolean
}

const StoryProgress = ({ isPaused }: StoryProgressProps) => (
  <div className={classes.progressContainer}>
    <div className={classes.progress}>
      <div
        className={classes.progressLine}
        style={{
          animationDuration: '25s',
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
      />
    </div>

    <div className={classes.progress}>
      <div
        className={classes.progressLine}
        style={{
          animationDuration: '25s',
          animationDelay: '25s',
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
      />
    </div>
  </div>
)

export default StoryProgress
