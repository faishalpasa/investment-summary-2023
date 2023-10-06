import React, { memo } from 'react'

import classes from './storyCard.module.css'

interface StoryCardProps {
  isPaused: boolean
}

const StoryCard = ({ isPaused }: StoryCardProps) => (
  <div className={classes.card}>
    <img src={`${process.env.REACT_APP_ASSET_URL}/images/cat-1.png`} alt="star1" className={classes.star1} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
    <img src={`${process.env.REACT_APP_ASSET_URL}/images/cat-1.png`} alt="star2" className={classes.star2} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
    <img src={`${process.env.REACT_APP_ASSET_URL}/images/cat-1.png`} alt="star3" className={classes.star3} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
    <img src={`${process.env.REACT_APP_ASSET_URL}/images/cat-1.png`} alt="star4" className={classes.star4} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />

    <div className={classes.titleOne} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
      <div className={classes.titleContent} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
        <p className={classes.textHeaderOne} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <p className={classes.textDescriptionOne} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
          Nulla faucibus, nulla a hendrerit suscipit,
          nulla enim feugiat leo, eu sodales massa sem ut sapien
        </p>
      </div>
    </div>

    <div className={classes.titleTwo} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
      <div className={classes.titleContent} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
        <div className={classes.imageShuffle}>
          <img src={`${process.env.REACT_APP_ASSET_URL}/images/cat-2.png`} alt="shuffle1" className={classes.imageShuffle1} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
        </div>
        <div className={classes.imageShuffle}>
          <img src={`${process.env.REACT_APP_ASSET_URL}/images/cat-3.png`} alt="shuffle2" className={classes.imageShuffle2} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
        </div>
        <div className={classes.imageShuffle}>
          <img src={`${process.env.REACT_APP_ASSET_URL}/images/cat-4.png`} alt="shuffle3" className={classes.imageShuffle3} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
        </div>
        <div className={classes.imageShuffle}>
          <img src={`${process.env.REACT_APP_ASSET_URL}/images/cat-5.png`} alt="shuffle4" className={classes.imageShuffle4} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
        </div>

        <p className={classes.textHeaderTwo} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>Proin sit amet dolor quis tortor tempor faucibus</p>
      </div>
    </div>

    <div className={classes.titleThree} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
      <div className={classes.titleContent} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
        <img src={`${process.env.REACT_APP_ASSET_URL}/images/cat-6.png`} alt="result" className={classes.imageResult} style={{ animationPlayState: isPaused ? 'paused' : 'running' }} />
        <p className={classes.textHeaderThree} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>The Specialist</p>
        <p className={classes.textDescriptionThree} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
          Pellentesque mattis, libero ut maximus rutrum, lectus quam hendrerit neque,
          quis pellentesque ex lorem pretium risus. Maecenas tempor non elit eu venenatis.
          Phasellus tempor arcu erat, ut tempor augue blandit vel.
          Vestibulum vitae eros augue. Nullam ut dui pharetra, vulputate velit non, dapibus dui.
        </p>
      </div>
    </div>
  </div>
)

export default memo(StoryCard)
