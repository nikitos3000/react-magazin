import Card from "../components/Card"
function Home({items, searchValue, setSearchValue,
     onAddToFavorites, searchInput, onAddToCart, id }) {
    return (
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
        onClickFavorite={(product) => onAddToFavorites(product)}
        onClickBuy={(product) => onAddToCart(product)}
        />
      ))
    }
</div>
      </div>
  )
}
    export default Home
