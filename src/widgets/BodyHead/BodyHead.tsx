import React from 'react'
import cls from './BodyHead.module.scss'

import img from './../../assets/image.png';

export const BodyHead = () => {
  return (
    <div>
      <span className={cls.title}>
              <img src={img} alt="One Piece"></img>
              Ван Пис 384 серия
            </span>
            <span className={cls.seriesName}>
              Мученья Брука - трудности на пути становления Накама!
            </span>
    </div>
  )
}
