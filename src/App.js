import { useState ,useRef} from 'react';
import './App.css';
import { Auth } from './components/Auth';
import Cookies from "universal-cookie";
import { Chat } from './components/Chat';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

const cookies = new Cookies()

function App() {
  const [isAuth,setIsAuth] = useState(cookies.get("auth-token"))
  const [room, setRoom] = useState(null)
  const roomInputRef = useRef(null);
  const signUserOut= async ()=>{
await signOut(auth)
cookies.remove("auth-token");
setIsAuth(false);
setRoom(null);
  }
  if(!isAuth){

 
  return (
    <div >
      <Auth setIsAuth={setIsAuth}></Auth>
    </div>
  );
}
return( <div className='a'>
{room?(<Chat room={room} />):(<div className='room'>
  <label className='b'>Enter room name</label>
  <input className='c1' ref={roomInputRef} />
  <button onClick={()=>setRoom(roomInputRef.current.value)}>enter chat</button>

  </div>
  )
  }
  <div className='sign-out'>
    <button onClick={signUserOut}>signout</button>
  </div>
</div>
);
}

export default App;
