import React, { useState } from "react"
import ChatCard from "../ChatCard/ChatCard.jsx"

const ChatWall = ({messages, onClick}) => {
    
    const cards = []

    for (let i = 0; i < messages.length; i++) {
        cards.push(<ChatCard message={messages[i]}/>)
    }

    const submit = (e) => {
        let textArea = document.getElementById("textAreaExample");
        onClick(e, textArea); 
        
        document.getElementById("textAreaExample").value = ''
    }

    return (
        <div className="col-md-6 col-lg-7 col-xl-8">
            <ul className="list-unstyled">
                {
                    cards 
                }
                <li className="bg-white mb-3">
                    <div data-mdb-input-init className="form-outline">
                        <textarea className="form-control bg-body-tertiary" id="textAreaExample" rows="4"></textarea>
                        <label className="form-label" for="textAreaExample">Message</label>
                    </div>
                </li>
                <button type="button" onClick={(e) => { submit(e) } }
                    data-mdb-button-init data-mdb-ripple-init className="btn btn-info btn-rounded float-end">Send</button>
            </ul>
        </div>
    )
}

export default ChatWall