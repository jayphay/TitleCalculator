import { useStore } from "../store/store"

export default function CashInput({ setSalesPrice}) {
    const setSaleAmount = useStore(state => state.setSaleAmount);
    const salePrice = useStore(state => state.salesPrice);

    // console.log(salePrice);

    function formatNumberWithCommas(value) {
        if (!value) return "";
        const parts = value.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }
    

    return (
        <div>
            <label htmlFor="Sales Price">Sales Price</label>
               <input type="text" 
                    inputMode="decimal"
                    pattern="^\d*\.?\d*$"
                    placeholder="Enter Sales Price"
                    onChange={e => {
                        const newValue = e.target.value;//.replace(/[^\d]/g, '');
                        if(/^\d*\.?\d*$/.test(newValue))
                            setSaleAmount(newValue)
                    }}
                    value={formatNumberWithCommas(salePrice)}
                    // value={new Intl.NumberFormat('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(salePrice)}   
                />
        </div>
    )
}