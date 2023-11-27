function Cart({onClose, items = []}){
    return(       <div  className="block">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">Корзина
        <button onClick={onClose} className="ml-50 cu-p">
            <img className="remove" width={11} height={11} src="/img/krest.png" alt="zakrit" />
          </button>
          </h2>
        <div className="items">      
          {
            items.map((obj) =>
            (
<div className="cartItem d-flex align-center mb-20">
          <img className="mr-15" width={70} height={70} src={obj.imgUrl} alt="tovar" />
          <div style={{backgroundImage: 'url(/img/tovar.jpg)' }} className="cartItemImg">

          </div>
          <div className="mr-20">
            <p className="mb-5">{obj.title}</p>
            <b>obj.price</b>
          </div>
          <button className="ml-50">
            <img className="remove" width={11} height={11} src="/img/krest.png" alt="zakrit" />
          </button>
        </div>
            )
            )
          }
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
      </div>)
}

export default Cart