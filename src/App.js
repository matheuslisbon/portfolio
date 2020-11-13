import NavBar from './components/NavBar/NavBar'

import GlobalStyles from './styles/GlobalStyles'

import Contato from './pages/Contato/Contato'
import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skills';
import Sobre from './pages/Sobre/Sobre';
import {useState, useEffect} from 'react'
import Footer from './pages/Footer/Footer';
import Sidebar from './components/SideBar/index'


function App() {
  const [scrollDiv, setScrollDiv] = useState('hidden')

  function handleScroll (){
    const scroll = document.documentElement.scrollTop
    if(scroll > 200 && scroll < 1000){
      if(scrollDiv === 'hidden')
      setScrollDiv('homeEffect')
    }
    if (scroll > 1001 && scroll < 1700 ){
      if(scrollDiv === 'homeEffect')
      setScrollDiv('skillsEffect')
    }
    else if(scroll >1701 && scroll < 2800){
      if(scrollDiv === 'skillsEffect')
      setScrollDiv('sobreEffect')
    }


  }
  useEffect(()=>{

    window.onscroll = () => handleScroll()
  })
  return (
  <>
    <GlobalStyles/>
        <Sidebar/>
        <NavBar/>
        <Home nameClass={scrollDiv} /> 
        <Skills nameClass={scrollDiv} />
        <Sobre nameClass={scrollDiv} />
        <Contato nameClass={scrollDiv}/>
        <Footer/>
  </>
  );
}

export default App;
