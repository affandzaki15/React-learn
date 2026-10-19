function ProductCard({name, price, category, image}){
    return(
        <div className="product">
            <img src={image} alt="mouse"/>
            <p>{category}</p>
            <h2>{name}</h2>
            <p className="pricee">{price}</p>
        </div>
    )
}

export default ProductCard