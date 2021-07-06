import React, {useState} from "react"
import { authService } from "../myBase"

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
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>
        </div>
    )
}

export default Auth