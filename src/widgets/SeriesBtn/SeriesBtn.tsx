import React from 'react'
import cls from './SeriesBtn.module.scss'
import { Button } from '../../shared/ui/Button/Button.tsx'

export const SeriesBtn = () => {
  return (
    <div className={cls.videoBtn}>
                <Button followingSeries children={'383 серия'} />
                <Button allSeries children={'Список всех серий'} />
                <Button previousSeries children={'385 серия'} />
              </div>
  )
}

