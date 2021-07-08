import React, {useState} from "react"
import { authService, firebaseInstance } from "../myBase"

const Auth = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [newAccount, setNewAccount] = useState(true)
    const [error, setError] = useState("")

    const onChange = (event) => {
        const {target : {name, value}} = event
        if(name==="email"){
            setEmail(value)
        } else if(name==="password"){
            setPassword(value)
        }
    }
    const onSubmit = async(event) => {
        event.preventDefault()
        let data;
        try{
            if(newAccount){
                data = await authService.createUserWithEmailAndPassword(email, password)
            } else {
                data = await authService.signInWithEmailAndPassword(email, password)
            }
            console.log(data)
        } catch(error){
            setError(error.message)
        }
    }
    const toggleAccount = () => setNewAccount(prev => !prev)
    const onSocialClick = async (event) => {
        // console.log(e.target.name) // 이름 확인
        const {target:{name}} = event
        let provider; 
        if(name==="google"){
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if(name==="github") {
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        await authService.signInWithPopup(provider)
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="email" name="email" placeholder="Email" value={email} onChange={onChange} required />
                <input type="password" name="password" placeholder="Password" value={password} onChange={onChange} required />
                <input type="submit" value={newAccount? "make new account" : "Login"} required />
                {error? <p>{error}</p> : null }
            </form>
            <span onClick={toggleAccount}>{newAccount ? "Sign in" : "create Account"}</span>
            <div>
                <button name="google" onClick={onSocialClick}>Continue with Google</button>
                <button name="github" onClick={onSocialClick}>Continue with Github</button>
            </div>
        </div>
    )
}

export default Auth