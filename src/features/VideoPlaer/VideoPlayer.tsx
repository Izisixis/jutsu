import React from 'react'
import cls from './VideoPlayer.module.scss'

export const VideoPlayer = () => {
  return (
    <div className={cls.seriya}>
                <video className={cls.videoPlayer}></video>
              </div>
  )
}


