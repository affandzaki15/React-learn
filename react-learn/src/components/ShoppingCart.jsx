import { useState } from "react";

function Cart(){
    const price = 250000
    const [quant, setQuant] = useState(1)
    const total = price * quant

    return(
        <div>
            <h2>Wireless Mouse</h2>
            <p>Harga Satuan: Rp{price}</p>
            <p>Quantitiy: {quant}</p>

            <input 
                type="number"
                min="0"
                value={quant}
                onChange={(event) => setQuant(Math.max(0, Number(event.target.value)))}
            />

            <button onClick={()=> setQuant(quant + 1)}>
                Tambah
            </button>
            <button onClick={()=> setQuant(Math.max(0, quant - 1))}>
                Kurang
            </button>
            <h3>Total Harga: {total}</h3>
        </div>
    )
}

export default Cart