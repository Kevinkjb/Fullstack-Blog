import {Link, Outlet} from 'react-router-dom'

export const NavBar = ()=>{
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
      </ul>
      <Outlet/>
    </nav>

  )

}