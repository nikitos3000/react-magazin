import Card from "../components/Card"
function Favorites({items, onAddToFavorites}) {
  console.log(items)
    return (
        <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои Закладки</h1>
      </div>
<div className="d-flex flex-wrap">
{
      items.map((obj, index) => (
        <Card 
        key={index}
        title={obj.title}
        price={obj.price}
        imgUrl={obj.imgUrl}
        favorited={true}
        onClickFavorite={onAddToFavorites}
        />
      ))
}
</div>
</div>
  )
}
    export default Favorites
