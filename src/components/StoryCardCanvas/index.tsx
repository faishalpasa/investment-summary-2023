import React, { useEffect, useRef, memo } from 'react'

import { CANVAS_HEIGHT, CANVAS_WIDTH } from 'constants/canvas'
import classes from './storyCardCanvas.module.css'

const STARS = [{
  x: CANVAS_WIDTH / 2,
  y: CANVAS_WIDTH / 2,
  size: 20,
},
{
  x: CANVAS_WIDTH / 3,
  y: CANVAS_WIDTH / 3,
  size: 50,
}]

const StoryCard = () => {
  const canvasRef = useRef<null | HTMLCanvasElement>(null)

  const init = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d')

    if (ctx) {
      ctx.strokeStyle = 'red'
      ctx.fillStyle = 'red'
      ctx.lineWidth = 1

      // ctx.scale(1, 2)
      // ctx.scale(1.5, 1.5)
      STARS.forEach((star) => {
        ctx.moveTo(star.x, star.y)
        ctx.quadraticCurveTo(
          star.x,
          star.y + (star.size * 1),
          star.x - (star.size * 1),
          star.y + (star.size * 1),
        )
        ctx.quadraticCurveTo(
          star.x,
          star.y + (star.size * 1),
          star.x + 0,
          star.y + (star.size * 2),
        )
        ctx.quadraticCurveTo(
          star.x,
          star.y + (star.size * 1),
          star.x + (star.size * 1),
          star.y + (star.size * 1),
        )
        ctx.quadraticCurveTo(
          star.x,
          star.y + (star.size * 1),
          star.x,
          star.y,
        )
        ctx.fill()
        ctx.save()
      })
    }
  }

  useEffect(() => {
    if (canvasRef.current) {
      init(canvasRef.current)
    }
  }, [canvasRef])

  return (
    <div className={classes.card}>
      <canvas ref={canvasRef} width={CANVAS_WIDTH} height={CANVAS_HEIGHT} />
    </div>
  )
}

export default memo(StoryCard)
