import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

export const CreateAccountPage = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const CreateAccount = async () =>{
        try{
            if(password !== confirmPassword){
                setError('Password does not match')
                return
            }
            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles')
        } catch (e){
            setError(e.message);
        }
    }
    return(
        <>
            <h1>Create Account</h1>
            {error && <p className="error">{error}</p>}
            <div className="login">
                <div className="email">
                <input 
                    placeholder='Email'
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                </div>
                <div className="password">
                    <input 
                        placeholder='Password'
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="password">
                    <input 
                        placeholder='Re-enter Password'
                        type="password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                    
                </div>
                <div className="login-btn-container">
                    <button className="login-btn" onClick={CreateAccount}>Create Account</button>
                    <Link className="create-acc-link" to="/login">Already have account? Log in</Link>
                </div>
            </div>
            
        </>
    )
}