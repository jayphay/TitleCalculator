import { Text, View } from '@react-pdf/renderer';
import {styles} from "./styles"

export default function NameLabel({name}) {
    return (
        <View style={styles.subSection}>
            <Text style={[styles.subHeadText, styles.bold]}>Title Quote Estimate for {name}</Text>
        </View>
    )
}