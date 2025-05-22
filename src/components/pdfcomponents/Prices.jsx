import { Text, View } from '@react-pdf/renderer';
import {styles} from "./styles"

export default function Prices({ transactionType, salePrice, loanAmount }) {
    salePrice = new Intl.NumberFormat('en-US', {minimumFractionDigits: 2,maximumFractionDigits: 2}).format(salePrice);
    loanAmount = new Intl.NumberFormat('en-US', {minimumFractionDigits: 2,maximumFractionDigits: 2}).format(loanAmount);

    return (
        <View style={styles.subSection}>
            <Text style={[styles.subHeadText, styles.bold]}>
                {transactionType == "Purchase with Financing" ? `Sale Price: $${salePrice} | Loan Amount: $${loanAmount}` : transactionType == "Cash Purchase" ? 
                `Sale Price: $${salePrice}` : `Loan Amount: $${loanAmount}`}
            </Text>
        </View>
    )
}