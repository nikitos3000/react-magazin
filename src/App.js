import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header';
import Cart from './components/Cart';



function App() {
  const [items, setItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCardOpened] = React.useState(false)

React.useEffect(() =>{
  axios.get('https://655e39039f1e1093c59ac065.mockapi.io/items').then(res =>{
    setItems(res.data)
  })
  axios.get('https://655e39039f1e1093c59ac065.mockapi.io/cart').then(res =>{
    setCartItems(res.data)
  })
  axios.get('')

},[])

const onAddToCart= (obj)=>{
  axios.post('https://655e39039f1e1093c59ac065.mockapi.io/cart', obj)
  setCartItems(prev =>[...prev, obj])
}

const onRemoveItem = (id) =>{
  axios.delete(`https://655e39039f1e1093c59ac065.mockapi.io/cart/${id}`)
  setCartItems(prev => prev.filter(item => item.id !== id))
}

const onAddToFavorites = (obj)=>{
  axios.post('https://655e39039f1e1093c59ac065.mockapi.io/cart', obj)
  setCartItems(prev =>[...prev, obj])
}

const searchInput = (event) =>{
  setFavorites(event.target.value)

}

  return (
    <div className="wrap clear">
     
    {cartOpened && <Cart items={cartItems} onClose={()=> setCardOpened(false)} onDelete={onRemoveItem}/>}

    <Header
    onClickCart={()=> setCardOpened(true)} />

      <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Поиск по запросу "${searchValue}"` : 'Все товары'}</h1>
      <div className="search d-flex">
        <img  width={30} height={30} src="/img/search.png" alt="" />
        {searchValue && 
            <img  onClick={()=> setSearchValue('')} className="clear cu-p remove" width={11} height={11} src="/img/krest.png" alt="clear" />}
        <input onChange={searchInput} value={searchValue} placeholder="Поиск" />
      </div>
      </div>
<div className="d-flex flex-wrap">
    {
      items
      .filter(item => item.title.toLowerCase()
      .includes(searchValue.toLowerCase())).map((obj, index) => (
        <Card 
        key={index}
        title={obj.title}
        price={obj.price}
        imgUrl={obj.imgUrl}
        onClickFavorite={() => console.log('hi')}
onClickBuy={(product) => onAddToCart(product)}
        />
      ))
    }
</div>
      </div>
    </div>
  )
}

export default App;
