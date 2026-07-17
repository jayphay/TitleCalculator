import { Page, Text, View, Document, Link } from '@react-pdf/renderer';
import {styles} from "./styles"


export default function ALDisclaimer() {
    return (
        <View style={styles.questions}>
            <Text>
                <Text style={styles.smallText}>*Estimated amount only. Recording fees vary by county, 
                and by number of pages and cross-references in each document recorded. 
                We'll confirm the final recording fees once we review your specific transaction.</Text>
            </Text>
        </View>
    )
}