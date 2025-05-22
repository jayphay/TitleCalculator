import { Page, Text, View, Document, Link } from '@react-pdf/renderer';
import {styles} from "./styles"


export default function Refi() {
    return (
        <View style={styles.questions}>
            <Text>
                <Text style={[styles.regText, styles.bold]}>Are you refinancing a loan? </Text>
                <Text style={styles.regText}>Ask your lender to send a title order to <Link src='mailto:info@shermanphalenlaw.com'>info@shermanphalenlaw.com</Link></Text>
            </Text>
        </View>
    )
}