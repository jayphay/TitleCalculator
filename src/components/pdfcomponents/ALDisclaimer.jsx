import { Page, Text, View, Document, Link } from '@react-pdf/renderer';
import {styles} from "./styles"


export default function ALDisclaimer() {
    return (
        <View style={styles.questions}>
            <Text>
                <Text style={styles.smallText}>*Estimated amount only. Alabama recording fees vary by county, 
                transaction type, and number of pages, among other factors. 
                Final recording charges are confirmed after review of the county requirements and recording documents.</Text>
            </Text>
        </View>
    )
}