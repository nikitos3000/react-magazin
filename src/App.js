

function App() {
  return (
    <div className="wrap clear">
      <div className="block">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">Корзина
        <button className="ml-50 cu-p">
            <img className="remove" width={11} height={11} src="/img/krest.png" alt="zakrit" />
          </button>
          </h2>
        <div className="items">        <div className="cartItem d-flex align-center mb-20">
          <img className="mr-15" width={70} height={70} src="/img/tovar.jpg" alt="tovar" />
          <div style={{backgroundImage: 'url(/img/tovar.jpg)' }} className="cartItemImg">

          </div>
          <div className="mr-20">
            <p className="mb-5">классный товар</p>
            <b>10000</b>
          </div>
          <button className="ml-50">
            <img className="remove" width={11} height={11} src="/img/krest.png" alt="zakrit" />
          </button>
        </div>
        <div className="cartItem d-flex align-center mb-20">
          <img className="mr-15" width={70} height={70} src="/img/tovar.jpg" alt="tovar" />
          <div style={{backgroundImage: 'url(/img/tovar.jpg)' }} className="cartItemImg">

          </div>
          <div className="mr-20">
            <p className="mb-5">классный товар</p>
            <b>10000</b>
          </div>
          <button className="ml-50">
            <img className="remove" width={11} height={11} src="/img/krest.png" alt="zakrit" />
          </button>
        </div>
        </div>
        <div className="total">
          <ul>
            <li>
            <span>Итого:</span>
            <div></div>
            <b>19 000 руб</b>
            </li>
            <li>
            <span>Скидка 5%:</span>
            <div></div>
            <b>1000 руб.</b>
            </li>
          </ul>
          <button className="greenButton">Оформить заказ</button>
          </div>
      </div>
      </div>


      <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
      <img width={40} height={40}  src="/img/logo.jpg" />
        <div>
          <h3 className="text-uppercase">magazin</h3>
          <p className="opacity-5">Это хороший магазин</p>
        </div>
      </div>
        <ul className="d-flex">
          <li className="mr-30">
          <img width={18} height={18}  src="/img/cart.png" />
            <span>
            1000 руб.
            </span>
            </li>
          <li>
          <img width={18} height={18}  src="/img/user.jpg" />
            </li>
        </ul>
      </header>
      <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Все товары</h1>
      <div className="search d-flex">
        <img  width={30} height={30} src="/img/search.png" alt="" />
        <input placeholder="Поиск" />
      </div>
      </div>
<div className="d-flex">
<div className="card">
  <div className="favorite">
  <button>
  <img height={11} width={11} src="/img/unlike.png" />
  </button>
  </div>
      <img width={133} height={112} src="/img/tovar.jpg" alt="" />
      <h5>классный товар 1</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>10000</b>
          <button className="button">
            <img height={11} width={11} src="/img/buy.png" alt=""></img>
          </button>
        </div>
      </div>
      </div>
      <div className="card">
      <img width={133} height={112} src="/img/tovar.jpg" alt="" />
      <h5>классный товар 1</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column justify-between">
          <span>Цена:</span>
          <b>10000</b>
          <button className="button">
            <img width={11} height={11} src="/img/buy.png" alt=""></img>
          </button>
        </div>
      </div>
      </div>
      <div className="card">
      <img width={133} height={112} src="/img/tovar.jpg" alt="" />
      <h5>классный товар 1</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>10000</b>
          <button className="button">
            <img width={11} height={11} src="/img/buy.png" alt=""></img>
          </button>
        </div>
      </div>
      </div>
      <div className="card">
      <img width={133} height={112} src="/img/tovar.jpg" alt="" />
      <h5>классный товар 1</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>10000</b>
          <button className="button">
            <img width={11} height={11} src="/img/buy.png" alt=""></img>
          </button>
        </div>
      </div>
      </div>      
</div>
      </div>
    </div>
  )
}

export default App;
