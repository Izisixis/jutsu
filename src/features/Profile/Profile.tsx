import React from 'react'
import cls from './Profile.module.scss'

export const Profile = () => {
  return (
    
  <div className={cls.profile}>
    <div className={cls.profileImg}>
      <img 
        src='https://gen.jut.su/uploads/fotos/31/4/10/foto_3141085_b5086f8d34.jpg' 
        alt='фото профиля'>
      </img>
    </div>
    <button className={cls.link}>Профиль</button>
    <button className={cls.link}>Сообщения</button>
    <button className={cls.link}>Выйти</button>
  </div>
  )
}

