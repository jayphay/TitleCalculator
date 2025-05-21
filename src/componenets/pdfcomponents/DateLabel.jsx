import { Text, View } from '@react-pdf/renderer';
import {styles} from "./styles"

export default function DateLabel() {
    const today = new Date();
    const year = today.getFullYear();
    const day = today.getDate();
    const monthInd = today.getMonth();

    const months = ["January", "February", "March", "April", 
        "May", "June", "July", "August", "September", "October",
        "November", "December"
    ];
    
    return (
        <View>
            <Text>Date: {`${months[monthInd]} ${day}, ${year}`}</Text>
        </View>
    )
}