import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import Cookies from "universal-cookie";
import '../style/Auth.css'

const cookies = new Cookies()
export const Auth = (props)=>{
    const{setIsAuth}=props
const signInWithGoogle = async ()=>{
    try{
   const result =  await signInWithPopup(auth,provider);
cookies .set ("auth-token",result.user.refreshToken)
setIsAuth(true);
}catch(err){
    console.error(err);
}
}
    return (
        
    <div className="auth">
        <div>
        <p>
            Enter Your Chat Room
        </p>
        <button onClick={signInWithGoogle}>sign in with Google</button>
        </div>
    </div>
    );
}