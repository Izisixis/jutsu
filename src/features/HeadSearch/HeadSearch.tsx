import React from 'react'
import cls from './HeadSearch.module.scss'

export const HeadSearch = () => {
  return (
    <div className={cls.headSearch}>
    <input className={cls.headInput}></input>
    <button className={cls.searchBtn}>Найти</button>
  </div>
  )
}
