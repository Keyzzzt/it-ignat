import React from 'react'
import {MessageType} from '../HW1'
import s from './FriendMessage.module.css'

type FriendMessageProps = {
    message: MessageType
}
// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendMessageProps) => {
    return (
        <div id={'hw1-friend-message-' + props.message.id} className={s.friendMessage}>
            <img id={'hw1-friend-avatar-' + props.message.id} src={props.message.user.avatar} alt='avatar' className={s.friendAvatar}/>
            <div className={s.angle}/>
            <div className={s.content}>
                <div id={'hw1-friend-name-' + props.message.id} className={s.friendName}>
                    {props.message.user.name}
                </div>
                <div id={'hw1-friend-text-' + props.message.id} className={s.friendMessageText}>
                    {props.message.message.text}
                </div>
                <div id={'hw1-friend-time-' + props.message.id} className={s.friendTime}>
                    {props.message.message.time}
                </div>
            </div>

        </div>
    )
}

export default FriendMessage
