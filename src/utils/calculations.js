/* 
    These objects will be changed to their correct values in the
    functions that are called for each of the different transactions.
    Some values may remain null and only non-null values will be printed
*/
// let titleCharges = {
//   name: "Settlement Fees",
//   "Attorney's Fee": null,
//   "Lender's Title Insurance": null,
//   "Owner's Title Insurance": null,
//   "Examination Fee": null,
//   "Commitment Fee": null,
//   "Closing Protection Letter": null,
//   "Post-Closing Fee": null,
//   "Payoff Special Handling Fee": null,
//   "E-Recording Fee (Per Document)": null,
// };

// let recordingCharges = {
//   name: "Government Fees",
//   "Deed Recording Fee": null,
//   "Mortgage Recording Fee": null,
//   "Transfer Tax": null,
//   "Intangible Tax": null,
// };

let sellerCharges = {
  "Post-Closing Fee": 45,
  "Payoff Special Handling Fee": 45,
};

// rate params are the rates for each of the 3 brackets: change them where the function is called to find correct title insurnace cost
function findTitleInsuranceCost(
  salesPrice,
  first100Rate,
  second400Rate,
  restRate
) {
  const first100Insurance = Math.max(
    salesPrice < 100000
      ? Math.ceil(salesPrice / 1000) * first100Rate
      : 100 * first100Rate,
    200
  ); // check if loan less than 100k
  let second400Insurance = 0;
  let restOfLoanInsurance = 0;

  if (salesPrice > 100000) {
    second400Insurance =
      salesPrice < 500000
        ? Math.ceil((salesPrice - 100000) / 1000) * second400Rate
        : 400 * second400Rate; // check if loan b/t 100k and 500k
  }
  if (salesPrice > 500000) {
    restOfLoanInsurance = Math.ceil((salesPrice - 500000) / 1000) * restRate;
  }

  return (
    Number
      (first100Insurance + second400Insurance + restOfLoanInsurance).toFixed(2)
  );
}

function findTransferTax(salesPrice) {
  return Number(salesPrice / 1000).toFixed(2)
}

function findIntangibleTax(loanAmount) {
  return (
    Number(Math.min(Math.ceil(loanAmount / 500) * 1.5, 25000)).toFixed(2)
  ); // takes the lesser of loan/500 * $1.50 and $25k (max amount of transfer tax)
}

/**
    The rates in findTitleInsurance will need to be updated whenever the rates are changed.
    Rates for lender and cash purchase are the owner's policy enhanced rates
    Rates for refinance are the loan policy regular rates
*/
function lenderPurchase(salesPrice, loanAmount) {
  const titleCharges = {
    name: "Settlement Fees",
    "Attorney's Fee": 675,
    "Lender's Title Insurance": 200,
    "Owner's Title Insurance": Number(findTitleInsuranceCost(
      salesPrice,
      6.6,
      5.55,
      4.5
    )),
    "Examination Fee": 225,
    "Commitment Fee": 200,
    "Closing Protection Letter": 50,
    "Post-Closing Fee": 45,
    "Payoff Special Handling Fee": 0,
    "E-Recording Fee (Per Document)": 9.5,
    "Technology Fee": 25,
  };

  const recordingCharges = {
    name: "Government Fees",
    "Deed Recording Fee": 25,
    "Mortgage Recording Fee": 25,
    "Intangible Tax": Number(findIntangibleTax(loanAmount)),
    "Transfer Tax": Number(findTransferTax(salesPrice)),
  };
  sellerCharges = {...sellerCharges, "Technology Fee": 25}

  return { titleCharges, recordingCharges, sellerCharges };


}

function cashPurcahse(salesPrice) {
  const titleCharges = {
    name: "Settlement Fees",
    "Attorney's Fee": 500,
    // "Lender's Title Insurance" : null,
    "Owner's Title Insurance": Number(findTitleInsuranceCost(
      salesPrice,
      6.6,
      5.55,
      4.5
    )),
    "Examination Fee": 225,
    "Commitment Fee": 200,
    // "Closing Protection Letter" : null,
    "Post-Closing Fee": 45,
    "Payoff Special Handling Fee": 0,
    "E-Recording Fee (Per Document)": 4.75,
    "Technology Fee": 25,
  };

  const recordingCharges = {
    name: "Government Fees",
    "Deed Recording Fee": 25,
    // "Mortgage Recording Fee" : null,
    "Transfer Tax": Number(findTransferTax(salesPrice)),
    // "Intangible Tax" : null
  };

  sellerCharges = {...sellerCharges, "Technology Fee": 25}

  return { titleCharges, recordingCharges, sellerCharges };

}

function refinance(loanAmount) {
  const titleCharges = {
    name: "Settlement Fees",
    "Attorney's Fee": 475,
    "Lender's Title Insurance": Number(findTitleInsuranceCost(
      loanAmount,
      4,
      3.3,
      2.95
    )),
    // "Owner's Title Insurance" : null,
    "Examination Fee": 225,
    "Commitment Fee": 125,
    "Closing Protection Letter": 50,
    "Post-Closing Fee": 45,
    // "Payoff Special Handling Fee" : null,
    "E-Recording Fee (Per Document)": 4.75,
    "Technology Fee": 50,
  };

  const recordingCharges = {
    name: "Government Fees",
    // "Deed Recording Fee" : null,
    "Mortgage Recording Fee": 25,
    // "Transfer Tax" : null,
    "Intangible Tax": Number(findIntangibleTax(loanAmount)),
  };

  sellerCharges = {
    "Post-Closing Fee": null,
    "Payoff Special Handling Fee": null,
  };

  return { titleCharges, recordingCharges, sellerCharges};

}

export {
  lenderPurchase,
  cashPurcahse,
  refinance,
};
