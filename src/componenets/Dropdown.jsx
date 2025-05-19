import { UserContext } from "../context/UserContext"
import { useContext } from "react"

export default function Dropdown() {
    const {transactionType, setTransaction} = useContext(UserContext);

    return (
        <div>
            <label htmlFor="Transaction">Choose a Transaction:</label>
            <select value={transactionType} onChange={(e)=> setTransaction(e.target.value)}>
                <option value="Purchase with Financing">Purchase with Financing</option>
                <option value="Cash Purchase">Cash Purchase</option>
                <option value="Refinance">Refinance</option>
            </select>
            {/* <p>Selected: {transactionType}</p> */}
        </div>
    )
}