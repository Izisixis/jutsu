import React from 'react'
import cls from './Swicher.module.scss'

export const Swicher = () => {
  return (
    <span className={cls.swicher}>
                    <span className={cls.backPlate}>
                      <div className={cls.circle}></div>
                    </span>
                  </span>
  )
}

