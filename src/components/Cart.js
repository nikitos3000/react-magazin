function Cart({onClose, onDelete, items = []}){
    return(       <div  className="block">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">Корзина
            <img onClick={onClose} className="remove ml-50 cu-p" width={11} height={11} src="/img/krest.png" alt="zakrit" />
          </h2>

          {
            items.length > 0 ? 
            <div>
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
              <b>{obj.price}</b>
            </div>
              <img onClick={()=> onDelete(obj.id)} className="remove" width={11} height={11} src="/img/krest.png" alt="zakrit" />
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
          :
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
          <img className="mb-20" width={120} height={120} src="/img/empty.jpg" alt="empty" />
          <h2>Корзина пуста</h2>
          <p className="opacity-6">Добавте что нибудь в корзину</p>
          <button onClick={onClose} className="greenButton">
          <img src="/img/arrow.svg" alt="arrow"/> Вернуться назад
          </button>
        </div>
          }
      </div>
      </div>)
}

export default Cart