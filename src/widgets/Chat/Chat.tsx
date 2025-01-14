import React from 'react'
import cls from './Chat.module.scss'

export const Chat = () => {
  return (
    <div className={cls.chat}>
              <div className={cls.chatSwich}>
                <span className={cls.chatTitle}> Чат</span>
                <span className={cls.swicherBgc}>
                  <span className={cls.chatSwicher}>
                    <span className={cls.backPlate}>
                      <div className={cls.circle}></div>
                    </span>
                  </span>
                </span>
              </div>
            </div>
  )
}
