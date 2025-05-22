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
                amount != null && <TableEntries id={index} chargeName={chargeName} 
                buyerAmt={amount} 
                sellerAmt={sellerCharges[chargeName]}
                transactionType={transactionType}
                doTab={true}
                /> 
            ))}

            <TableEntries 
                chargeName={`Subtotal`}
                buyerAmt={`$${new Intl.NumberFormat('en-US', {minimumFractionDigits: 2,maximumFractionDigits: 2}).format(total)}`}
                sellerAmt={charges.name === "Settlement Fees" ? "$90" : "$0"} 
                transactionType={transactionType}
                doTab={true}
                />
        </View>
    )
}