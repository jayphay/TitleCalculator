import { View, Text, Image } from "@react-pdf/renderer";
import logoBase64Raw from './logo.txt?raw'
import {styles} from "./styles"

const logoBase64 = `data:image/png;base64,${logoBase64Raw}`;

export default function Header() {
    return (
        <View style={styles.header}>
            <Image src={logoBase64} style={styles.logo}/>
            <View>
                <Text>Sherman & Phalen, LLC</Text>
                <Text>Real estate closings</Text>
                <Text>built around you</Text>
            </View>
        </View>
    )
}