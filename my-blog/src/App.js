import { AboutPage } from './pages/AboutPage';
import { ArticlesListPage } from './pages/ArticlesListPage';
import { ArticlePage } from './pages/ArticlePage';
import { HomePage } from './pages/HomePage';
import { NavBar } from './NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { LoginPage } from './pages/LoginPage';
import { CreateAccountPage } from './pages/CreateAccountPage';
import { NotFoundPage } from './pages/NotFoundPage';
import './App.css'

function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <div className='main'>
          <Routes>
            <Route path='/' element={ <HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/articles' element={<ArticlesListPage/>}/>
            <Route path='/articles/:articleId' element={<ArticlePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/create-account" element={<CreateAccountPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
