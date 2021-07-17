import ItemCard from './ItemCard.js'

function ItemContainer({items, setItems}) {  
    return (
        <> 
            {items.map(item => <ItemCard key={item.id} item={item} items={items} setItems={setItems}/>)} 
        </>
    )
}

export default ItemContainer;
