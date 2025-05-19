/* 
    These objects will be changed to their correct values in the
    functions that are called for each of the different transactions.
    Some values may remain null and only non-null values will be printed
*/
let titleCharges = {
    "name" : "Title Charges",
    "Attorney's Fee" :  null,
    "Lender's Title Insurance" : null, 
    "Owner's Title Insurance" : null, 
    "Examination Fee" : null,
    "Commitment Fee" : null,
    "Closing Protection Letter" : null,
    "Post-Closing Fee" : null,
    "Payoff Special Handling Fee" : null, 
    "E-Recording Fee (Per Document)" : null
};

let recordingCharges = {
    "name" : "Recording and Transfer",
    "Deed Recording Fee" : null,
    "Mortgage Recording Fee" : null,
    "Transfer Tax" : null, 
    "Intangible Tax" : null
};

const sellerCharges = {
    "Post-Closing Fee" : 45,
    "Payoff Special Handling Fee" : 45
}


// rate params are the rates for each of the 3 brackets: change them where the function is called to find correct title insurnace cost
function findTitleInsuranceCost(salesPrice, first100Rate, second400Rate, restRate) {
    const first100Insurance = salesPrice < 100000 ? (salesPrice / 1000) * first100Rate : 100 * first100Rate; // check if loan less than 100k
    let second400Insurance = 0;
    let restOfLoanInsurance = 0;

    if (salesPrice > 100000) {
        second400Insurance = salesPrice < 500000 ? ((salesPrice-100000) / 1000) * second400Rate : 400 * second400Rate; // check if loan b/t 100k and 500k
    }
    if (salesPrice > 500000) {
        restOfLoanInsurance = Math.ceil((salesPrice - 500000) / 1000) * restRate;
    }

    return first100Insurance + second400Insurance + restOfLoanInsurance;
}

function findTransferTax(salesPrice) {
    return salesPrice / 1000;
}

function findIntangibleTax(loanAmount) {
    return Math.min((Math.ceil(loanAmount / 500)) * 1.5, 25000);  // takes the lesser of loan/500 * $1.50 and $25k (max amount of transfer tax)
}

/* 
    The rates in findTitleInsurance will need to be updated whenever the rates are changed.
    Rates for lender and cash purchase are the owner's policy enhanced rates
    Rates for refinance are the loan policy regular rates
*/

function lenderPurchase(salesPrice, loanAmount) {
    titleCharges = {
        "name" : "Title Charges",
        "Attorney's Fee" :  650,
        "Lender's Title Insurance" : 200,
        "Owner's Title Insurance" : findTitleInsuranceCost(salesPrice, 6.6, 5.55, 4.5), 
        "Examination Fee" : 200,
        "Commitment Fee" : 200,
        "Closing Protection Letter" : 50,
        "Post-Closing Fee" : 45,
        "Payoff Special Handling Fee" : 0, 
        "E-Recording Fee (Per Document)" : 9.5
    };

    recordingCharges = {
        "name" : "Recording and Transfer",
        "Deed Recording Fee" : 25,
        "Mortgage Recording Fee" : 25,
        "Transfer Tax" : findTransferTax(salesPrice), 
        "Intangible Tax" : findIntangibleTax(loanAmount) 
    }
}

function cashPurcahse(salesPrice) {
    titleCharges = {
        "name" : "Title Charges",
        "Attorney's Fee" :  475,
        "Lender's Title Insurance" : null,
        "Owner's Title Insurance" : findTitleInsuranceCost(salesPrice, 6.6, 5.55, 4.5), 
        "Examination Fee" : 200,
        "Commitment Fee" : 200,
        "Closing Protection Letter" : null,
        "Post-Closing Fee" : 45,
        "Payoff Special Handling Fee" : 0, 
        "E-Recording Fee (Per Document)" : 9.5
    };

    recordingCharges = {
        "name" : "Recording and Transfer",
        "Deed Recording Fee" : 25,
        "Mortgage Recording Fee" : null,
        "Transfer Tax" : findTransferTax(salesPrice), 
        "Intangible Tax" : null 
    }
}

function refinance(loanAmount) {
    titleCharges = {
        "name" : "Title Charges",
        "Attorney's Fee" :  450,
        "Lender's Title Insurance" : findTitleInsuranceCost(loanAmount, 4, 3.3, 2.95),
        "Owner's Title Insurance" : null, 
        "Examination Fee" : 200,
        "Commitment Fee" : 125,
        "Closing Protection Letter" : 50,
        "Post-Closing Fee" : 45,
        "Payoff Special Handling Fee" : null, 
        "E-Recording Fee (Per Document)" : 4.75
    };

    recordingCharges = {
        "name" : "Recording and Transfer",
        "Deed Recording Fee" : null,
        "Mortgage Recording Fee" : 25,
        "Transfer Tax" : null, 
        "Intangible Tax" : findIntangibleTax(loanAmount) 
    }

}

export {titleCharges, recordingCharges, sellerCharges, lenderPurchase, cashPurcahse, refinance};