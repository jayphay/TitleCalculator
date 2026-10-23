import { Page, Text, View, Document, Link } from '@react-pdf/renderer';
import {styles} from "./styles"


export default function LenderDisclaimer() {
    return (
        <View style={styles.questions}>
            <Text>
                <Text style={styles.smallText}>*If the purchaser declines to purchase an owner's title policy, the lender's policy amount will increase.</Text>
            </Text>
        </View>
    )
}