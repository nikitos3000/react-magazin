import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Cart from './components/Cart';



function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCardItems] = React.useState([])
  const [cartOpened, setCardOpened] = React.useState(false)

React.useEffect(() =>{
  fetch('https://655e39039f1e1093c59ac065.mockapi.io/items').then((res)=> {
    return res.json()
  }).then(json => {
    setItems(json)
  })
},[])
const onAddToCart= ()=>{
  console.log(123)
}

  return (
    <div className="wrap clear">
     
    {cartOpened && <Cart items={cartItems} onClose={()=> setCardOpened(false)}/>}

    <Header
    onClickCart={()=> setCardOpened(true)} />

      <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Все товары</h1>
      <div className="search d-flex">
        <img  width={30} height={30} src="/img/search.png" alt="" />
        <input placeholder="Поиск" />
      </div>
      </div>
<div className="d-flex flex-wrap">
    {
      items.map((obj) => (
        <Card 
        title={obj.title}
        price={obj.price}
        imgUrl={obj.imgUrl}
        onClickFavorite={() => console.log('hi')}
        onClickBuy={onAddToCart}
        />
      ))
    }
</div>
      </div>
    </div>
  )
}

export default App;
