import { useState } from "react"
import {Link, useNavigate} from 'react-router-dom'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

export const LoginPage = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const logIn = async () => {
        try{
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles')
        } catch (e){
            setError(e.message);
        }
        
    }
    return(
        <>
            <h1>Login In</h1>
            {error && <p className="error">{error}</p>}
            <div className="login">
                <div className="email">
                <input 
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                </div>
                <div className="password">
                    <input 
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    
                </div>
                <div className="login-btn-container">
                    <button className="login-btn" onClick={logIn}>Login</button>
                    <Link className="create-acc-link" to="/create-account">Don't have an account? Create Account</Link>
                </div>
            </div>
            
        </>
    )
}