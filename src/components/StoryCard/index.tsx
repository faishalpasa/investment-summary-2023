import React, { useEffect, useRef, memo } from 'react'

import { CANVAS_HEIGHT, CANVAS_WIDTH } from 'constants/canvas'
import classes from './storyCard.module.css'

const StoryCard = () => {
  useEffect(() => {
    console.log('test')
  }, [])

  return (
    <div className={classes.card}>
      <img src={`${process.env.REACT_APP_ASSET_URL}/images/cat-1.png`} alt="star1" className={classes.star1} />
      <img src={`${process.env.REACT_APP_ASSET_URL}/images/cat-1.png`} alt="star2" className={classes.star2} />
      <img src={`${process.env.REACT_APP_ASSET_URL}/images/cat-1.png`} alt="star3" className={classes.star3} />
      <img src={`${process.env.REACT_APP_ASSET_URL}/images/cat-1.png`} alt="star4" className={classes.star4} />

      <div className={classes.titleOne}>
        <div className={classes.titleContent}>
          <p className={classes.textHeaderOne}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <p className={classes.textDescriptionOne}>
            Nulla faucibus, nulla a hendrerit suscipit,
            nulla enim feugiat leo, eu sodales massa sem ut sapien
          </p>
        </div>
      </div>

      <div className={classes.titleTwo}>
        <div className={classes.titleContent}>
          <div className={classes.imageShuffle}>
            <img src={`${process.env.REACT_APP_ASSET_URL}/images/cat-2.png`} alt="shuffle1" className={classes.imageShuffle1} />
          </div>
          <div className={classes.imageShuffle}>
            <img src={`${process.env.REACT_APP_ASSET_URL}/images/cat-3.png`} alt="shuffle2" className={classes.imageShuffle2} />
          </div>
          <div className={classes.imageShuffle}>
            <img src={`${process.env.REACT_APP_ASSET_URL}/images/cat-4.png`} alt="shuffle3" className={classes.imageShuffle3} />
          </div>
          <div className={classes.imageShuffle}>
            <img src={`${process.env.REACT_APP_ASSET_URL}/images/cat-5.png`} alt="shuffle4" className={classes.imageShuffle4} />
          </div>

          <p className={classes.textHeaderTwo}>Proin sit amet dolor quis tortor tempor faucibus</p>
        </div>
      </div>

      <div className={classes.titleThree}>
        <div className={classes.titleContent}>
          <img src={`${process.env.REACT_APP_ASSET_URL}/images/cat-6.png`} alt="result" className={classes.imageResult} />
          <p className={classes.textHeaderThree}>The Specialist</p>
          <p className={classes.textDescriptionThree}>
            Pellentesque mattis, libero ut maximus rutrum, lectus quam hendrerit neque,
            quis pellentesque ex lorem pretium risus. Maecenas tempor non elit eu venenatis.
            Phasellus tempor arcu erat, ut tempor augue blandit vel.
            Vestibulum vitae eros augue. Nullam ut dui pharetra, vulputate velit non, dapibus dui.
          </p>
        </div>
      </div>
    </div>
  )
}

export default memo(StoryCard)
