import { Page, Text, View, Document, Link } from '@react-pdf/renderer';
import {styles} from "./styles"


export default function Note() {
    return (
        <View>
            <Text>Note.</Text>
            <Text>If you are a member of a pre-paid legal service, you may qualify for certain discounts. Please contact us for a quote at <Link src='tel:+17705790109'>770-579-0109</Link>.</Text>
        </View>
    )
}