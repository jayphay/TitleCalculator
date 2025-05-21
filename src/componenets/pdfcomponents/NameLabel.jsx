import { Text, View } from '@react-pdf/renderer';
import {styles} from "./styles"

export default function NameLabel({name}) {
    return (
        <View>
            <Text>Title Quote Estimate for {name}</Text>
        </View>
    )
}