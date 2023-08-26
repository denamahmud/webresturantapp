import { Route, Routes, HashRouter  } from 'react-router-dom';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Header from './components/Header';  

function App() {

  return (
    <HashRouter>
        
      <Header/>     
          <Routes>

            <Route exact  path='' element={<Home/>}/>
            <Route path='our-story' element={<OurStory/>}/>
            <Route path='menu' element={<Menu/>}/>
            <Route path='contact' element={<Contact/>}/>


            </Routes> 
    
        <Footer/>
    </HashRouter>
  );
}

export default App;
