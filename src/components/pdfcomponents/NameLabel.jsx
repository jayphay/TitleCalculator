import { Text, View } from '@react-pdf/renderer';
import {styles} from "./styles"

export default function NameLabel({name, state, transactionType}) {
    return (
        <View style={styles.nameLabelSpacing}>
            <Text style={[styles.subHeadText, styles.bold]}>Title Quote Estimate for {name}</Text>
            <Text style={[styles.subHeadText, styles.bold]}>State: {state}</Text>
            <Text style={[styles.subHeadText, styles.bold]}>Transaction: {transactionType}</Text>
        </View>
    )
}

