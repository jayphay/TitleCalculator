import { Page, Text, View, Document, Link } from '@react-pdf/renderer';
import {styles} from "./styles"



export default function Questions() {
    return (
        <View style={styles.questions}>
            <Text>
                <Text style={[styles.regText, styles.bold]}>Questions? </Text>
                <Text style={styles.regText}>Contact Sherman & Phalen at <Link src='tel:+17705790109'>770-579-0109</Link> or at <Link src=' https://www.shermanphalenlaw.com/contact-us'>www.shermanphalenlaw.com/contact-us</Link></Text>
            </Text>
        </View>
    )
}