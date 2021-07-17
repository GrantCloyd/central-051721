function ItemCard({item}) {

    return (
        <div> 
            <img src={item.image_url}></img>
            <h2>{item.item_name}</h2>
            <h2>{item.price}</h2>
            <p>{item.description}</p>  
        </div>
    )
}

export default ItemCard;
