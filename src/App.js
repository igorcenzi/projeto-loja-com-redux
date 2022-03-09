import './App.css';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {Switch, Route, useHistory} from 'react-router-dom'
import CardProduct from './components/CardProduct';
import StoreList from './components/StoreList';
import Header from './components/Header';
import CartItem from './components/CartItem';
import CartList from './components/CartList';
import Cart from './pages/Cart';

function App() {

  const history = useHistory()

  const productList = useSelector(state => state.productList)
  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch()
  
  history.location.pathname === '/' && history.push('/store')
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/store'>
        <StoreList/>
        </Route>
        <Route exact path='/cart'>
        <Cart/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
