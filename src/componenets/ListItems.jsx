import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import ChargesTable from "./ChargesTable";
import { useStore } from "../store/store.js";
import ChargesTableEntries from "./ChargesTableEntries.jsx";


export default function ListItems() {
    const {titleCharges, recordingCharges, grandTotal, transactionType} = useContext(UserContext);
    const total = useStore(state => state.total);

    return (
        <div>
            <ChargesTable charges={titleCharges}/>

            <ChargesTable charges={recordingCharges} />
            <table>
                <ChargesTableEntries chargeName="Grand Total"
                    buyerAmt={`$${total}`}
                    sellerAmt={transactionType !== "Refinance" ? "$90" : ""}
                />
            </table>

        </div>
        
    )
}