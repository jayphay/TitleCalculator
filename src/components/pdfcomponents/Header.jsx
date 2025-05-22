import { View, Text, Image } from "@react-pdf/renderer";
import logoBase64Raw from './logo.txt?raw'
import {styles} from "./styles"

const logoBase64 = `data:image/png;base64,${logoBase64Raw}`;

export default function Header() {
    return (
        <View style={styles.header}>
            <Image src={logoBase64} style={styles.logo}/>
            <View style={styles.logoName}>
                <Text style={[styles.logoLetters, styles.bold]}>Sherman & Phalen, LLC</Text>
                <Text style={styles.logoLetters}>Real estate closings</Text>
                <Text style={styles.logoLetters}>built around you.</Text>
            </View>
        </View>
    )
}