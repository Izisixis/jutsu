import React from 'react'
import cls from './Seen.module.scss'
import { SeenSeries } from '../../shared/ui/SeenSeries/SeenSeries.tsx'

export const Seen = () => {
  return (
    <div className={cls.seen}>
      <span>Ранее вы смотрели: </span>
      <a href='https://jut.su/oneepiece/episode-383.html'><SeenSeries children='383 серия Ван Пис'/>,</a>
      <a href='https://jut.su/oneepiece/episode-382.html'><SeenSeries children='382 серия Ван Пис'/>,</a>
      <a href='https://jut.su/oneepiece/episode-381.html'><SeenSeries children='381 серия Ван Пис'/>,</a>
      <a href='https://jut.su/oneepiece/episode-380.html'><SeenSeries children='380 серия Ван Пис'/>,</a>
      <a href='https://jut.su/oneepiece/episode-379.html'><SeenSeries children='379 серия Ван Пис'/>,</a>
      <a href='https://jut.su/oneepiece/episode-378.html'><SeenSeries children='378 серия Ван Пис'/>,</a>
      <a href='https://jut.su/oneepiece/episode-377.html'><SeenSeries children='377 серия Ван Пис'/>,</a>
      <a href='https://jut.su/oneepiece/episode-376.html'><SeenSeries children='376 серия Ван Пис'/>,</a>
      <a href='https://jut.su/oneepiece/episode-375.html'><SeenSeries children='375 серия Ван Пис'/>,</a>
      <a href='https://jut.su/oneepiece/episode-374.html'><SeenSeries children='374 серия Ван Пис'/>,</a>
      <a href='https://jut.su/oneepiece/episode-373.html'><SeenSeries children='373 серия Ван Пис'/>,</a>
      <a href='https://jut.su/oneepiece/episode-372.html'><SeenSeries children='372 серия Ван Пис'/>,</a>
      <a href='https://jut.su/oneepiece/episode-371.html'><SeenSeries children='371 серия Ван Пис'/>,</a>
      <a href='https://jut.su/oneepiece/episode-370.html'><SeenSeries children='370 серия Ван Пис'/>,</a>
      <a href='https://jut.su/oneepiece/episode-369.html'><SeenSeries children='369 серия Ван Пис'/>.</a>
    </div>
  )
}

