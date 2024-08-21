import React, { useState } from "react"
import MemberList from "../Components/MemberList/MemberList"
import ChatWall from "../Components/ChatWall/ChatWall"
import Chats from "../Data/Chats.js"
import { Navigate } from "react-router-dom"



const Chat = () => {
    const [memberId, setMemberId] = useState(1)
    const [msg, setMsg] = useState(Chats[0].messages);
    const handleProfile = () =>{
        Navigate({to} , "./Profile");
    }

    const selectChat = (memId) => {
        const chat = Chats.find(chat => chat.memberId == memId)
        setMsg(chat.messages)
    }

    const onClick = (e, textValue) =>
        {
            e.preventDefault()
            const msgList = [
                ...msg,
                {
                    'avatarUrl': 'https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/290640931_10228028269350969_2107774110916831778_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeF9eSIRBsM2QX5fk2w22NdGSwKcAsG7nt1LApwCwbue3XRXHrBmJwRKis_jpOnNRgU&_nc_ohc=gmPnQ33fiZ0Q7kNvgHQlpOm&_nc_ht=scontent-eze1-1.xx&oh=00_AYCCX9xgdbs5WWvpPGYpMM6UdhTqvadAU3mCcZauyeolNA&oe=66C9E477',
                    'name': 'Yo',
                    'text': textValue.value,
                    'clock': 'Justo ahora',
                    'itsMe': true
                }
            ]
            setMsg(msgList)

            const chat = Chats.find(chat => chat.memberId == memberId)
            chat.messages = [...msgList]
    }

    return(
        <section>
            <div className="container py-5">
                <div className="row">
                <div className="form-floating">
                <button onClick={handleProfile}>Perfil</button>
                </div>
                    <MemberList setMemberId={setMemberId} selectChat={selectChat}/>
                    <ChatWall messages={msg} onClick={onClick} />
                </div>
            </div>
            </section>
    )
}

export default Chat