import {Link, useNavigate} from 'react-router-dom'
import { useUser } from './hooks/useUser';
import {getAuth, signOut} from 'firebase/auth'


export const NavBar = ()=>{
  const {user} = useUser();
  const navigate = useNavigate()
  return(
    <nav>
      <ul>
        <li>
          <Link to="/" className='list'>Home</Link>
        </li>
        <li>
          <Link to="about" className='list'>About</Link>
        </li>
        <li>
          <Link to="articles" className='list'>Articles</Link>
        </li>
        <div className='nav-right'>
         {user ? <button className='btn-nav' onClick={()=> {signOut(getAuth());}}>Log Out</button> : <button className='btn-nav' onClick={() => {navigate('/login')}}>Log In</button>}
        </div>
      </ul>

    </nav>

  )

}