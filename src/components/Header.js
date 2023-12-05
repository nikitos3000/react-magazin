import { Link } from "react-router-dom"

function Header(props){
    return (      <header className="d-flex justify-between align-center p-40">
        <Link to="/">
    <div className="d-flex align-center">
    <img width={40} height={40}  src="/img/logo.jpg" alt="logo" />
      <div>
        <h3 className="text-uppercase">magazin</h3>
        <p className="opacity-5">Это хороший магазин</p>
      </div>
    </div>
    </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
        <img width={18} height={18}  src="/img/cart.png"  alt="cart" />
          <span>
          1000 руб.
          </span>
          </li>
          <li className="mr-10 cu-p">
       <Link to="/favorites">
       <img width={18} height={18}  src="/img/heart.svg" alt="heart"/>
       </Link>
          </li>
        <li>
        <img width={18} height={18}  src="/img/user.jpg" alt="user"/>
          </li>
      </ul>
    </header>)
}
export default Header