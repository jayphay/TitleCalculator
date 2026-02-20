import { Page, Text, View, Document, Link } from '@react-pdf/renderer';
import {styles} from "./styles"


export default function FinCenNote() {
    return (
        <View style={styles.questions}>
            <Text>
                <Text style={[styles.smallText, styles.bold]}>FinCEN Compliance Fee. </Text>
                <Text style={styles.smallText}>Note that in some transactions when the Purchaser is an entity or a trust, the transaction may be reportable under FinCEN's Residential Real Estate Rule. In that case, there's an additional FinCEN Compliance Fee of $250.</Text>
            </Text>
        </View>
    )
}