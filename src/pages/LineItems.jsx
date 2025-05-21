import { useNavigate } from 'react-router-dom';
import ListItems from '../components/ListItems.js';
import QuoteInfo from '../components/QuoteInfo.js';
import { UserContext, UserProvider } from '../context/UserContext';
import { useStore } from "../store/store.js";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useContext } from 'react';
import QuotePdf from '../components/pdfcomponents/QuotePdf.jsx';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { titleCharges, recordingCharges, sellerCharges } from '../utils/calculations.js';


export default function LineItems() {
    const navigate = useNavigate();
    const resetHasAdded = useStore(state => state.resetHasAdded);
    const name = useStore(state => state.name);
    const transactionType = useStore(state => state.transactionType);
    const salePrice = useStore(state => state.salesPrice);
    const loanAmount = useStore(state => state.loanAmount);
    const total = useStore(state => state.total);
    // const {titleCharges, recordingCharges, sellerCharges} = useContext(UserContext);

    // console.log("sale price", salePrice)


    const handleClick = () => {
        navigate("/");
        
        useStore.getState().resetHasAdded();
        useStore.getState().resetTotal();
    }

    // const printRef = React.useRef(null);
    // const handleDownloadPdf = async () => {
    //     const element = printRef.current;
    //     if (!element)
    //         return;

    //     const canvas = await html2canvas(element, {
    //         scale: 2
    //     });
    //     const data = canvas.toDataURL('image/png');

    //     const pdf = new jsPDF({
    //         orientation: "portrait",
    //         unit: "px",
    //         format: "a4"
    //     });
    //     const imageProperties = pdf.getImageProperties(data);
    //     const pdfWidth = pdf.internal.pageSize.getWidth();
    //     const pdfHeight = (imageProperties.height * pdfWidth) / imageProperties.width;

    //     pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    //     pdf.save("title-quote.pdf");
    // }

    return (
        <div>
            <UserProvider>
                <div>
                    <QuoteInfo />
                    <ListItems />
                </div>
                <button onClick={handleClick}>Edit</button>
                {/* <button onClick={handleDownloadPdf}>Download PDF</button> */}
                <div>
                {console.log("sale price", salePrice)}
                    <PDFDownloadLink document={<QuotePdf name={name} transactionType={transactionType} salePrice={salePrice} loanAmount={loanAmount}
                        recordingCharges={recordingCharges} titleCharges={titleCharges} sellerCharges={sellerCharges} total={total}
                    />} fileName="title-quote.pdf">
                    {({ blob, url, loading, error }) =>
                        <button disabled={loading}>
                            {loading ? 'Loading document...' : 'Download PDF'}
                        </button>
                    }
                    </PDFDownloadLink>
                </div>
            </UserProvider>
        </div>
    )
}