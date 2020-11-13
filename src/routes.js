import {Switch, Route} from 'react-router-dom'
import Contato from './pages/Contato/Contato'


import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Skills from './pages/Skills/Skills'

export default function Routes (){
  return (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/sobre' component={Sobre} />
    <Route path='/contato' component={Contato} />
    <Route path='/skills' component={Skills}/>
  </Switch>
  )

}