import React from "react";
import MemberItem from "../MemberItem/MemberItem";
import Members from "../../Data/Members.js";

const MemberList = ({setMemberId, selectChat}) => {
    const items = []

    for (let i = 0; i < Members.length; i++) {
        items.push(<MemberItem member={Members[i]} setMemberId={setMemberId} selectChat={selectChat} />)
    }

    return(
        <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
            <h5 className="font-weight-bold mb-3 text-center text-lg-start">Amigos</h5>
            <div className="card">
                <div className="card-body">
                    <ul className="list-unstyled mb-0">
                    {
                        items
                    }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MemberList