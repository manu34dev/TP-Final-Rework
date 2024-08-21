import React from "react";

const ChatCard = ({message}) => {
    
    if(message.itsMe) {
        return (<li className="d-flex justify-content-between mb-4">
            <div className="card w-100">
                <div className="card-header d-flex justify-content-between p-3">
                    <p className="fw-bold mb-0">{message.name}</p>
                    <p className="text-muted small mb-0"><i className="far fa-clock"></i>{message.clock}</p>
                </div>
                <div className="card-body">
                    <p className="mb-0">
                    {message.text}
                    </p>
                </div>
            </div>
            <img src={message.avatarUrl} alt="avatar"
            className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong" width="60 " />
        </li>)
    }
    else {
        return (<li className="d-flex justify-content-between mb-4">
            <img src={message.avatarUrl} alt="avatar"
            className="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60" />
            <div className="card">
                <div className="card-header d-flex justify-content-between p-3">
                    <p className="fw-bold mb-0">{message.name}</p>
                    <p className="text-muted small mb-0"><i className="far fa-clock"></i>{message.clock}</p>
                </div>
                <div className="card-body">
                    <p className="mb-0">
                    {message.text}
                    </p>
                </div>
            </div>
        </li>)
    }
}

export default ChatCard