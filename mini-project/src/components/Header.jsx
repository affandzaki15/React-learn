function Header({total}){
    return (

        <header>
            <h1>Product dashboard</h1>
            <p>Kelola produk dan pantau stok dengan mudah</p>
            <p> Total Produk: {total}</p>
        </header>
    )
}

export default Header