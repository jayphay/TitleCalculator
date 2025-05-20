import { useStore } from "../store/store"

export default function LoanInput({loanAmount, setLoanAmount}) {
    const setLoanAmt = useStore(state => state.setLoanAmt);
    const loanAmt = useStore(state => state.loanAmount);

    function formatNumberWithCommas(value) {
        if (!value) return "";
        const parts = value.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }

    return ( 
        <div>
            <label htmlFor="Loan Amount">Loan Amount</label>
                <input 
                    type="text" 
                    inputMode="numeric"
                    pattern="^\d*\.?\d*$"
                    placeholder="Enter Loan Amount"
                    onChange={e => {
                        const newValue = e.target.value;//.replace(/[^\d]/g, '');
                        if(/^\d*\.?\d*$/.test(newValue))
                            setLoanAmt(newValue)
                    }}
                    // value={new Intl.NumberFormat('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}).format(loanAmt)}
                    value={formatNumberWithCommas(loanAmount)}
                /> 
        </div>
    )
}