import { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider({children}) {
    const [transactionType, setTransaction] = useState("Purchase with Financing");
    const [salesPrice, setSalesPrice] = useState("");
    const [loanAmount, setLoanAmount] = useState("");


    // console.log(children);

    return (
        <UserContext.Provider value={{transactionType, setTransaction, salesPrice, setSalesPrice, loanAmount, setLoanAmount}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider};