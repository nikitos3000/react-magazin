function Card() {
    return (<div className="card">
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
        )
}
export default Card
