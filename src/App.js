import React from 'react';
import axios from 'axios';
import {
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Cart from './components/Cart';
import Home from './pages/home';
import Favorites from './pages/favorites';




function App() {
  const [items] = React.useState([{"id":1,"title":"классный товар 1","price":10000,"imgUrl":"/img/tovari/tovar.jpg"},
  {"id":2,"title":"классный товар 2","price":7000,"imgUrl":"/img/tovari/beton.jpg"},
  {"id":3,"title":"классный товар 1","price":10000,"imgUrl":"/img/tovari/tovar.jpg"},
  {"id":4,"title":"классный товар 2","price":20000,"imgUrl":"/img/tovari/beton.jpg"},
  {"id":5,"title":"Супер товар","price":10000,"imgUrl":"/img/tovari/tovar.jpg"},
  {"id":6,"title":"классный товар 2","price":20000,"imgUrl":"/img/tovari/beton.jpg"},
  {"id":7,"title":"Супер товар","price":10000,"imgUrl":"/img/tovari/tovar.jpg"}])
  const [favorites, setFavorites] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCardOpened] = React.useState(false)

React.useEffect(() =>{
  axios.get('https://655e39039f1e1093c59ac065.mockapi.io/cart').then(res =>{
    setCartItems(res.data)
  })
  axios.get('https://655e39039f1e1093c59ac065.mockapi.io/items')
  .then(res => {
    setFavorites(res.data)
  })

},[])

const onAddToCart= (obj)=>{
  console.log(obj)
  axios.post('https://655e39039f1e1093c59ac065.mockapi.io/cart', obj)
  setCartItems(prev =>[...prev, obj])
}

const onRemoveItem = (id) =>{
  console.log(id)
  axios.delete(`https://655e39039f1e1093c59ac065.mockapi.io/cart/${id}`)
  setCartItems(prev => prev.filter(item => item.id !== id))
}

const onAddToFavorites = (obj)=>{
  console.log(obj)
  if(favorites.find(obj => obj.id === 1)){
  axios.delete(`https://655e39039f1e1093c59ac065.mockapi.io/items/${obj.id}`)
  setFavorites((prev) => prev.filter((item) => item.id === obj.id))
  }
  axios.post('https://655e39039f1e1093c59ac065.mockapi.io/items', obj)
  setFavorites(prev =>[...prev, obj])
}

const searchInput = (event) =>{
  setSearchValue(event.target.value)

}
console.log(items)
  return (
    <div className="wrap clear">
     
    {cartOpened && <Cart items={cartItems} onClose={()=> setCardOpened(false)} onDelete={onRemoveItem}/>}

    <Header onClickCart={()=> setCardOpened(true)} />


<Routes>
<Route path="/" exact element={<Home
 items={items}
 searchValue={searchValue}
 setSearchValue={setSearchValue}
 onAddToFavorites={onAddToFavorites}
 searchInput={searchInput}
 onAddToCart={onAddToCart}
/>}>
</Route>
<Route path='/favorites' exact element={<Favorites
items={favorites}
onAddToFavorites={onAddToFavorites}
/>}>

</Route>
 </Routes>


    </div>
  )
}

export default App;
