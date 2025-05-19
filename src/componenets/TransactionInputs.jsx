import { UserContext } from "../context/UserContext"
import { useContext } from "react"
import CashInput from "./CashInput";
import LoanInput from "./LoanInput";

export default function TransactionInputs() {
    const {transactionType, salesPrice, setSalesPrice, loanAmount, setLoanAmount} = useContext(UserContext);

    if(transactionType == "Purchase with Financing" ) {
        return (
            <div>
                <CashInput salesPrice={salesPrice} setSalesPrice={setSalesPrice} />
                <LoanInput loanAmount={loanAmount} setLoanAmount={setLoanAmount} />
            </div>
        )
    } 
    else if (transactionType == "Cash Purchase") {
        return (
            <div>
                <CashInput salesPrice={salesPrice} setSalesPrice={setSalesPrice} />
            </div>
        )
    }
    else {
        return (
            <div>
                <LoanInput loanAmount={loanAmount} setLoanAmount={setLoanAmount} />
            </div>
        )
    }
}