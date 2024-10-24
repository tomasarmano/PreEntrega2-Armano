import ItemList from "./itemList"
import hocFilterProducts from "../../hoc/hocFilterProducts"
import "./itemlistcontainer.css"

const ItemListContainer = ({ products }) => {

  return (
    <div className="itemlistcontainer">
      {
        <ItemList products={products}/>
      }

    </div>
  )
}

const ItemListContainerWithHoc = hocFilterProducts(ItemListContainer)

export default ItemListContainerWithHoc

