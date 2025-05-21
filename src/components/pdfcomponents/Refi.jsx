import { Page, Text, View, Document, Link } from '@react-pdf/renderer';
import {styles} from "./styles"


export default function Refi() {
    return (
        <View>
            <Text>Are you refinancing a loan?</Text>
            <Text>Ask your lender to send a title order to <Link src='mailto:info@shermanphalenlaw.com'>info@shermanphalenlaw.com</Link></Text>
        </View>
    )
}