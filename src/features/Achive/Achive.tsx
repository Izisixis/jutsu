import React from 'react'
import cls from './Achive.module.scss'
import { Swicher } from '../../shared/ui/Swicher/Swicher.tsx'

export const Achive = () => {
  return (
    <div className={cls.achive}>
                <div className={cls.achiveSwich}>
                  <span className={cls.info}>?</span> <span>Достижения</span>
                  <Swicher/>
                </div>
              </div>
  )
}
