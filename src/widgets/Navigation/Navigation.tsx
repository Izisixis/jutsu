import React from 'react'
import cls from './Navigation.module.scss'

export const Navigation = () => {
  return (
    <div className={cls.navigation}>
              <div className={cls.navTitle}>
                Навигация<span> по сайту</span>
              </div>
              <ul>
                <li>Аниме</li>
                <li>Форум</li>
                <li>Нарутопедия</li>
              </ul>
              <ul>
                <li>Смотреть Наруто</li>
                <li>Манга Наруто</li>
                <li>Новеллы Наруто</li>
                <li>Видео-истории</li>
                <li>Видео-обзоры</li>
                <li>Все герои</li>
                <li>Список техник</li>
              </ul>
              <ul className={cls.last}>
                <li>Вакансии</li>
                <li>Оповещение в ВК и TG</li>
                <li>Наши контакты</li>
              </ul>
            </div>
  )
}

