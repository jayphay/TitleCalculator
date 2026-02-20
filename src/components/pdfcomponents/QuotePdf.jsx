import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import {styles} from "./styles"
import Header from './Header';
import NameLabel from './NameLabel';
import DateLabel from './DateLabel';
import Prices from './Prices';
import ChargeTable from './ChargeTable';
import TableEntries from './TableEntries';
import {Table, TR, TH, TD} from '@ag-media/react-pdf-table';
import Questions from './Questions';
import Refi from './Refi';
import NewHome from './NewHome';
import Note from './Note';
import Disclaimer from './Disclaimer';
import FinCenNote from './FinCenNote';


export default function QuotePdf({name, transactionType, salePrice, loanAmount, titleCharges, recordingCharges, sellerCharges, total}) {

    const QuotePdf = () => (
    <Document style={styles.document}>
        <Page size="A4" style={styles.page}>
            <View style={styles.allContainer}>
                <Header />
                <View style={styles.subHeader}>
                    {/* <View style={styles.shadow}/> */}
                    <NameLabel name={name} />
                    <Prices transactionType={transactionType} salePrice={salePrice} loanAmount={loanAmount}/>
                    <DateLabel />
                </View>
                
                <View>
                    <Table style={styles.tableStyles}>
                        <ChargeTable charges={titleCharges} transactionType={transactionType} sellerCharges={sellerCharges}/>
                        <ChargeTable charges={recordingCharges} transactionType={transactionType} sellerCharges={sellerCharges}/>
                        <TableEntries 
                            chargeName="Total"
                            buyerAmt={`$${new Intl.NumberFormat('en-US', {minimumFractionDigits: 2,maximumFractionDigits: 2}).format(total)}`}
                            sellerAmt={transactionType !== "Refinance" ? "$90" : ""}
                            transactionType={transactionType}
                            />
                    </Table>
                </View>

                <View style={styles.footer}>
                    <Questions />
                    <Refi />
                    <NewHome />
                    
                </View>
                <View style={styles.extraSpace}>
                    <Note />
                    {/* {console.log("transactionType:", transactionType)} */}
                    {transactionType != "Refinance" ? <FinCenNote /> : ""}
                    {/* <FinCenNote /> */}
                    <Disclaimer />
                </View>

            </View>
        </Page>
    </Document>
    );

    return (
        <QuotePdf />
    )
}