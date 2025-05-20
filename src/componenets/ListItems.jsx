import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import ChargesTable from "./ChargesTable";
import { useStore } from "../store/store.js";
import ChargesTableEntries from "./ChargesTableEntries.jsx";


export default function ListItems() {
    const {titleCharges, recordingCharges} = useContext(UserContext);
    const total = useStore(state => state.total);
    const transactionType = useStore(state => state.transactionType)

    return (
        <div>
            <ChargesTable charges={titleCharges}/>

            <ChargesTable charges={recordingCharges} />
            <table>
                <tfoot>
                    <ChargesTableEntries chargeName="Grand Total"
                    buyerAmt={`$${new Intl.NumberFormat('en-US', {minimumFractionDigits: 2,maximumFractionDigits: 2}).format(total)}`}
                    sellerAmt={transactionType !== "Refinance" ? "$90" : ""}
                    />
                </tfoot>
            </table>

        </div>
        
    )
}