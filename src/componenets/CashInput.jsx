export default function CashInput({salesPrice, setSalesPrice}) {
    return (
        <div>
            <label htmlFor="Sales Price">Sales Price</label>
               <input type="text" 
                    placeholder="Enter Sales Price"
                    onChange={(e) => setSalesPrice(e.target.value)}
                    value={salesPrice}
                />
        </div>
    )
}