import { Text, View } from '@react-pdf/renderer';
import {Table, TR, TH, TD} from '@ag-media/react-pdf-table';
import {styles} from "./styles"

export default function TableEntries({chargeName, buyerAmt, sellerAmt, transactionType, id, doTab}) {
    return (
        <TR style={chargeName == "Settlement Fees" ? [ styles.bold, styles.regText, styles.topLeft, styles.topRight] :
        chargeName == "Total" ? [ styles.bold, styles.regText, styles.bottomLeft, styles.bottomRight] :
        chargeName == "Government Fees" ? [styles.greenBG, styles.bold, styles.regText,] :
        chargeName == "Subtotal" ? [styles.blueBG, styles.bold, styles.regText] : id % 2 == 0 ? [styles.greyBG, styles.regText] : styles.regText}>

            <TD style={doTab ? [styles.entryCell, styles.indentedCell] : 
            // chargeName == "Settlement Fees" ? 
            // [styles.topLeft] : chargeName == "Total" ? [styles.bottomLeft] :
            [styles.entryCell, styles.nonIndentedCell, ]}>{chargeName}</TD>

            <TD style={
                // transactionType == "Refinance" && chargeName == "Settlement Fees" ? [styles.topRight,] : 
                // transactionType == "Refinance"  && chargeName == "Settlement Fees" ? [ styles.bottomRight, ] :
                styles.entryCell}>{buyerAmt == null || chargeName == "Payoff Special Handling Fee" ?  "" : typeof buyerAmt == "number" ? 
                `$${new Intl.NumberFormat('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}).format(buyerAmt)}` 
                : buyerAmt}
            </TD>

            {transactionType != "Refinance" ? <TD style={
            //     chargeName == "Settlement Fees" ? [styles.topRight] : 
            // chargeName == "Total" ? [styles.bottomRight, ] : 
            styles.entryCell}>{sellerAmt == null ?  "" : typeof sellerAmt == "number" ?
             `$${new Intl.NumberFormat('en-US', {minimumFractionDigits: 2,maximumFractionDigits: 2}).format(sellerAmt)}` 
             : sellerAmt}</TD> : null}
        </TR>
    )
}
