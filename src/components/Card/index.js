import React from 'react'
import styles from './Card.module.scss'
function Card({onClickFavorite, title, imgUrl, price, onClickBuy}) {
  const [isAdd, setIsAdd] = React.useState(false)
  const [isFavorite, setIsFavorite] = React.useState(false)

  const onClickPlus = () =>{
    onClickBuy({title, imgUrl, price,})
    setIsAdd(!isAdd)
  }

  const onClickHeart = () =>{
    setIsFavorite(!isFavorite)
  }



    return (
    <div className={styles.card}>
    <div className="favorite">
    <img onClick={onClickHeart} height={20} width={20} src={isFavorite ? "/img/liked.svg" : "/img/heart.svg"} />
    </div>
        <img width={133} height={112} src={imgUrl} alt="tovar" />
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>{price}</b>
            <button className="button" onClick={onClickPlus}>
              <img height={11} width={11} src={isAdd ? "/img/add.png" : "/img/buy.png"} alt="buy"></img>
            </button>
          </div>
        </div>
        </div>
        )
}
export default Card
