import {Switch, Route} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Info from './components/Info'
import Header from './components/Header'
import NotFound from './components/NotFound'

const Routes = () => (
<Switch>
    <Route path='/' exact component={Home} />
    <Route path='/about' component={About}/>
    <Route path='/info' component={Info}/>
    <NotFound/>
</Switch>
)

export default Routes