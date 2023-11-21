// import { useEffect, useState } from "react";
// import { addDoc, collection, serverTimestamp,onSnapshot, where, query } from "firebase/firestore";
// import { auth, db } from "../firebase";
// // import '../style/Chat.css'

// export const Chat=(props)=>{

//     const {room}=props
// const[newMessage,setNewMessage]=useState("")
// const[messages,setMessages]=useState("")
// const messagesRef=collection(db,"messages")

// useEffect(()=>{
//     const queryMessages=query(messagesRef,where("room","==",room));
//  const unsuscribe = onSnapshot(queryMessages,(snapshot)=>{
//     let messages=[];
//     snapshot.forEach((doc)=>{
// messages.push({...doc.data(), id: doc.id});
//     })
//     setMessages(messages)

// })
// return() =>unsuscribe();
// },[]);

//     const handleSubmit= async(e)=>{
// e.preventDefault();
// // console.log(newMessage);
// if (newMessage ==="") return;

// await addDoc(messagesRef,{
//     text:newMessage,
//     createdAt:serverTimestamp (),
//     user:auth.currentUser.displayName,
//     room,
// });


// setNewMessage("")
//     };
//     return (

//     <div className="chatt-app">

//         <div>
//             {messages.map((message)=>
//         <h1>{message.text}</h1>)}
//         </div>
//     <form onSubmit={handleSubmit} className="new-message-form">
// <input 
// className="ne-message-input" 
// placeholder="Type Here..."
// onChange={(e)=>setNewMessage(e.target.value)}
// value={newMessage}
//  />
// <button type submit className="send-button">send</button>
//     </form>
//     </div>
//     )
// };
// import React, { useState, useEffect } from "react";
// import { db, auth } from "../firebase-config";
// import {
//   collection,
//   addDoc,
//   where,
//   serverTimestamp,
//   onSnapshot,
//   query,
//   orderBy,
// } from "firebase/firestore";

// import "../styles/Chat.css";

// export const Chat = ({ room }) => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const messagesRef = collection(db, "messages");

//   useEffect(() => {
//     const queryMessages = query(
//       messagesRef,
//       where("room", "==", room),
//       orderBy("createdAt")
//     );
//     const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
//       let messages = [];
//       snapshot.forEach((doc) => {
//         messages.push({ ...doc.data(), id: doc.id });
//       });
//       console.log(messages);
//       setMessages(messages);
//     });

//     return () => unsuscribe();
//   }, []);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (newMessage === "") return;
//     await addDoc(messagesRef, {
//       text: newMessage,
//       createdAt: serverTimestamp(),
//       user: auth.currentUser.displayName,
//       room,
//     });

//     setNewMessage("");
//   };

//   return (
//     <div className="chat-app">
//       <div className="header">
//         <h1>Welcome to: {room.toUpperCase()}</h1>
//       </div>
//       <div className="messages">
//         {messages.map((message) => (
//           <div key={message.id} className="message">
//             <span className="user">{message.user}:</span> {message.text}
//           </div>
//         ))}
//       </div>
//       <form onSubmit={handleSubmit} className="new-message-form">
//         <input
//           type="text"
//           value={newMessage}
//           onChange={(event) => setNewMessage(event.target.value)}
//           className="new-message-input"
//           placeholder="Type your message here..."
//         />
//         <button type="submit" className="send-button">
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };




import { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp, onSnapshot, where, query, orderBy } from "firebase/firestore";
import { auth, db } from "../firebase";
 import '../style/Chat.css'


export const Chat = (props) => {
  const { room } = props;
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]); // Change here
  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const queryMessages = query(messagesRef, where("room", "==", room));
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let messagesArray = [];
      snapshot.forEach((doc) => {
        messagesArray.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messagesArray);
    });

    return () => unsubscribe();
  }, [room]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newMessage === "") return;

    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });

    setNewMessage("");
  };

  return (
    <div className="chatt-app">
        <div className="header">
            <h1 className="mt-5">Welcome to:{room.toUpperCase()}</h1>
        </div>
      <div className="messages">
        {messages.map((message) => (
        //   <h1 key={message.id}>{message.text}</h1>
          <div className="message" key={message.id}>
<span className="user">{message.user}</span>
{message.text}

          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="new-message-form">
        <input
          className="ne-message-input"
          placeholder="Type Here..."
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
};
