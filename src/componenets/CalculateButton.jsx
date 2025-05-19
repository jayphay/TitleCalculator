import { UserContext } from "../context/UserContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom";

export default function CalculateButton() {
    const {transactionType, salesPrice, loanAmount, lenderPurchase, cashPurcahse, refinance, titleCharges} = useContext(UserContext);
    const navigate = useNavigate();

    function handleClick() {
        if(transactionType == "Purchase with Financing" ) 
            lenderPurchase(salesPrice, loanAmount)
        else if (transactionType == "Cash Purchase") 
            cashPurcahse(salesPrice)
        else 
            refinance(loanAmount)
        
        // console.log(titleCharges);
        navigate("/quote");
    }

    return (
        <div>
            <button onClick={handleClick}>
                Calculate
            </button>
        </div>
    )
}