import { Page, Text, View, Document, Link } from '@react-pdf/renderer';
import {styles} from "./styles"


export default function NewHome() {
    return (
        <View style={styles.questions}>
            <Text>
                <Text style={[styles.regText, styles.bold]}>Are you buying a new home? </Text>
                <Text style={styles.regText}>Make sure <Link src='https://www.shermanphalenlaw.com'>Sherman & Phalen, LLC</Link> is listed as the closing attorney in your contract and send a fully signed copy to <Link 
                src='mailto:info@shermanphalenlaw.com'>info@shermanphalenlaw.com</Link>. If you are getting a loan, your lender will need to send a title order to <Link 
                src='mailto:info@shermanphalenlaw.com'>info@shermanphalenlaw.com</Link>.</Text>
            </Text>
        </View>
    )
}