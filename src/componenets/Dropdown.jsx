import { UserContext } from "../context/UserContext"
import { useContext } from "react"
import { useStore } from "../store/store";

export default function Dropdown() {
    const { setTransaction} = useContext(UserContext);
    const transactionType = useStore(state => state.transactionType);
    const setTransactionType = useStore(state => state.setTransactionType);

    // console.log(transactionType)

    return (
        <div>
            <label htmlFor="Transaction">Choose a Transaction:</label>
            <select value={transactionType} onChange={e => setTransactionType(e.target.value)}>
                <option value="Purchase with Financing">Purchase with Financing</option>
                <option value="Cash Purchase">Cash Purchase</option>
                <option value="Refinance">Refinance</option>
            </select>
            {/* <p>Selected: {transactionType}</p> */}
        </div>
    )
}