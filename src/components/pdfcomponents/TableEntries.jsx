import { Text, View } from '@react-pdf/renderer';
import {Table, TR, TH, TD} from '@ag-media/react-pdf-table';
import {styles} from "./styles"

export default function TableEntries({chargeName, buyerAmt, sellerAmt, transactionType}) {
    return (
        <TR>
            <TD>{chargeName}</TD>
            <TD>{buyerAmt == null ?  "" : typeof buyerAmt == "number" ? 
            `$${new Intl.NumberFormat('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}).format(buyerAmt)}` 
            : buyerAmt}</TD>
            {transactionType != "Refinance" ? <TD>{sellerAmt == null ?  "" : typeof sellerAmt == "number" ?
             `$${new Intl.NumberFormat('en-US', {minimumFractionDigits: 2,maximumFractionDigits: 2}).format(sellerAmt)}` 
             : sellerAmt}</TD> : null}
        </TR>
    )
}

