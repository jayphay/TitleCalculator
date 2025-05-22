import { Page, Text, View, Document, Link } from '@react-pdf/renderer';
import {styles} from "./styles"


export default function Disclaimer() {
    return (
        <View style={styles.questions}>
            <Text>
                <Text style={[styles.smallText, styles.boldItalic]}>Disclaimer. </Text>
                <Text style={styles.smallText}>This is an estimate of settlement charges and certain government fees for transactions in Georgia. 
                Additional transaction and closing fees may apply depending on your transaction. This is an estimate only and 
                Sherman & Phalen, LLC does not guarantee these amounts because each transaction is unique. </Text>
            </Text>
        </View>
    )
}