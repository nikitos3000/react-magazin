import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Cart from './components/Cart';



function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCardItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCardOpened] = React.useState(false)

React.useEffect(() =>{
  fetch('https://655e39039f1e1093c59ac065.mockapi.io/items').then((res)=> {
    return res.json()
  }).then(json => {
    setItems(json)
  })
},[])
const onDeleteItem = (obj) => {
  setCardItems(prev => [...prev])
}

const onAddToCart= (obj)=>{
if(cartItems.includes(obj)){
  onDeleteItem()
}
  setCardItems(prev =>[...prev, obj])
}

const searchInput = (event) =>{
  setSearchValue(event.target.value)

}

  return (
    <div className="wrap clear">
     
    {cartOpened && <Cart items={cartItems} onClose={()=> setCardOpened(false)}/>}

    <Header
    onClickCart={()=> setCardOpened(true)} />

      <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Поиск по запросу "${searchValue}"` : 'Все товары'}</h1>
      <div className="search d-flex">
        <img  width={30} height={30} src="/img/search.png" alt="" />
        {searchValue && <button onClick={()=> setSearchValue('')} className="clear cu-p">
            <img className="remove" width={11} height={11} src="/img/krest.png" alt="clear" />
          </button>}
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
