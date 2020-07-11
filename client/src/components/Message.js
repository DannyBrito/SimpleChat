import React,{useState,useEffect} from 'react'

const Message = ({sender, message, user}) => {

    const [ownership,setOwnership] = useState(false)
    
    useEffect(()=>{
        if(sender === user) setOwnership(true)
    },[sender,user])

    const messageOwner = (base,owner) =>{
        return ownership ? base + ' ' + owner : base
    }

    return (
        <div className={`${messageOwner('message_box','own_message')}`}>
            <div className="message_sender">{sender ? sender : 'Unknow'}:</div>
            <div className={`${messageOwner('message_content','blue_bbl')}`}>{message}</div>
        </div>
    )
}

export default Message