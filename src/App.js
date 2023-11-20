import Card from './components/card';
import Header from './components/Header';
import Cart from './components/Cart';

function App() {
  return (
    <div className="wrap clear">
     
    <Cart />

    <Header />

      <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Все товары</h1>
      <div className="search d-flex">
        <img  width={30} height={30} src="/img/search.png" alt="" />
        <input placeholder="Поиск" />
      </div>
      </div>
<div className="d-flex">
 <Card />     
</div>
      </div>
    </div>
  )
}

export default App;
