import React, { Children } from 'react'
import cls from './SeenSeries.module.scss'

interface SeenSeriesProps {
  children: string;
}

export const SeenSeries = (props: SeenSeriesProps) => {

const {
  children
} = props;

  return (
    <div className={cls.container}>
      <div className={cls.logo}></div>
      <span className={cls.subTitle}>{children}</span>
    </div>
  )
}
