import { Text, View } from '@react-pdf/renderer';
import {Table, TR, TH, TD} from '@ag-media/react-pdf-table';
import {styles} from "./styles"
import TableEntries from './TableEntries';

export default function ChargeTable({charges, transactionType, sellerCharges}) {
    let total = Object.entries(charges)
    .reduce((sum, [charge, amount]) => {
        if (charge !== "name" && typeof amount === 'number') {
            return sum + amount;
        }

        return sum;
    }, 0);

    return (
        <View>
            <TableEntries 
                chargeName={charges.name} 
                buyerAmt={transactionType != "Refinance" ? "Buyer Pays" : "Borrower Pays"} 
                sellerAmt={"Seller Pays"} 
                transactionType={transactionType}
                />

            {Object.entries(charges).slice(1).map(([chargeName, amount], index) => (
                amount != null && <TableEntries key={index} chargeName={chargeName} 
                buyerAmt={amount} 
                sellerAmt={sellerCharges[chargeName]}
                transactionType={transactionType}
                /> 
            ))}

            <TableEntries 
                chargeName={`Subtotal for ${charges.name}`}
                buyerAmt={`$${new Intl.NumberFormat('en-US', {minimumFractionDigits: 2,maximumFractionDigits: 2}).format(total)}`}
                sellerAmt={charges.name === "Title Charges" ? "$90" : "$0"} 
                transactionType={transactionType}
                />
        </View>
    )
}