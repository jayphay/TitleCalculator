import { createContext, useState } from "react";
import {titleCharges, recordingCharges, sellerCharges, lenderPurchase, cashPurcahse, refinance} from "../utils/calculations";
import { useStore } from "../store/store";

const UserContext = createContext();

function UserProvider({children}) {
    const [transactionType, setTransaction] = useState("Purchase with Financing");
    const [salesPrice, setSalesPrice] = useState("");
    const [loanAmount, setLoanAmount] = useState("");
    
    
    // console.log(children);

    return (
        <UserContext.Provider value={{transactionType, setTransaction, salesPrice, setSalesPrice, loanAmount, setLoanAmount,
        lenderPurchase, cashPurcahse, refinance, titleCharges, recordingCharges, sellerCharges}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider};