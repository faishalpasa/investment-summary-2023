/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  memo, useEffect, useState,
} from 'react'

import classes from './storyCardSecond.module.css'

const COUNTDOWN = 25

interface StoryCardSecondProps {
  isPaused: boolean
  onFinish: () => void
}

const StoryCardSecond = ({ isPaused, onFinish }: StoryCardSecondProps) => {
  let interval: any = null
  const [countdown, setCountdown] = useState(COUNTDOWN)

  useEffect(() => {
    if (!isPaused) {
      interval = setInterval(() => {
        setCountdown((prevState) => prevState - 1)
      }, 1000)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isPaused])

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(interval)
      onFinish?.()
    }
  }, [countdown, onFinish])

  return (
    <div className={classes.card} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
      <img src={`${process.env.REACT_APP_ASSET_URL}/images/cat-1.png`} alt="star1" className={classes.star1} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
      <img src={`${process.env.REACT_APP_ASSET_URL}/images/cat-1.png`} alt="star2" className={classes.star2} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
      <img src={`${process.env.REACT_APP_ASSET_URL}/images/cat-1.png`} alt="star3" className={classes.star3} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
      <img src={`${process.env.REACT_APP_ASSET_URL}/images/cat-1.png`} alt="star4" className={classes.star4} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />

      <div className={classes.titleOne} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
        <div className={classes.titleContent} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
          <p className={classes.textHeaderOne} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>

      <div className={classes.titleTwo} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
        <div className={classes.titleContent} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
          <p className={classes.textHeaderTwo} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <p className={classes.textDescriptionTwo} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
            Ultricies lacus sed turpis tincidunt.
            Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar
          </p>
        </div>
      </div>

      <div className={classes.titleThree} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
        <div className={classes.titleContent} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
          <div className={classes.resultContainer}>
            <img src={`${process.env.REACT_APP_ASSET_URL}/images/cat-6.png`} alt="result" className={classes.imageResult} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
          </div>
          <div className={`${classes.resultSmallContainer} ${classes.smallContainer1}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
            <img src={`${process.env.REACT_APP_ASSET_URL}/images/cat-2.png`} alt="result" className={classes.imageResultSmall} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
            <p className={classes.textResult} style={{ animationDelay: '14s', animationPlayState: isPaused ? 'paused' : 'running' }}>1. Lorem Ipsum</p>
          </div>
          <div className={`${classes.resultSmallContainer} ${classes.smallContainer2}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
            <img src={`${process.env.REACT_APP_ASSET_URL}/images/cat-3.png`} alt="result" className={classes.imageResultSmall} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
            <p className={classes.textResult} style={{ animationDelay: '15s', animationPlayState: isPaused ? 'paused' : 'running' }}>2. Lorem Ipsum</p>
          </div>
          <div className={`${classes.resultSmallContainer} ${classes.smallContainer3}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
            <img src={`${process.env.REACT_APP_ASSET_URL}/images/cat-4.png`} alt="result" className={classes.imageResultSmall} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
            <p className={classes.textResult} style={{ animationDelay: '16s', animationPlayState: isPaused ? 'paused' : 'running' }}>3. Lorem Ipsum</p>
          </div>
          <div className={`${classes.resultSmallContainer} ${classes.smallContainer4}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
            <img src={`${process.env.REACT_APP_ASSET_URL}/images/cat-5.png`} alt="result" className={classes.imageResultSmall} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
            <p className={classes.textResult} style={{ animationDelay: '17s', animationPlayState: isPaused ? 'paused' : 'running' }}>4. Lorem Ipsum</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(StoryCardSecond)
