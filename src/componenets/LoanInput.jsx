export default function LoanInput({loanAmount, setLoanAmount}) {
    return ( 
        <div>
            <label htmlFor="Loan Amount">Loan Amount</label>
                <input 
                    type="text" 
                    placeholder="Enter Loan Amount"
                    onChange={(e) => setLoanAmount(e.target.value)}
                    value={loanAmount}
                /> 
        </div>
    )
}