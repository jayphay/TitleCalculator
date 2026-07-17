function findTitleInsuranceCost(
  salesPrice,
  first100Rate,
  second400Rate,
  next500Rate,
  next9MRate,
  next5MRate,
  restRate
) {
  const first100Insurance = Math.max(
    salesPrice < 100000
      ? Math.ceil(salesPrice / 1000) * first100Rate
      : 100 * first100Rate,
    300
  ); // check if loan less than 100k
  let second400Insurance = 0;
  let next500Insurance = 0;
  let next9MInsurance = 0;
  let next5MInsurance = 0;
  let restOfLoanInsurance = 0;

  if (salesPrice > 100000) {
    second400Insurance =
      salesPrice < 500000
        ? Math.ceil((salesPrice - 100000) / 1000) * second400Rate
        : 400 * second400Rate; // check if loan b/t 100k and 500k
  } if (salesPrice > 500000) {
    next500Insurance = salesPrice < 1000000 ? Math.ceil((salesPrice - 500000) / 1000) * next500Rate : 500 * next500Rate;
    // restOfLoanInsurance = Math.ceil((salesPrice - 500000) / 1000) * restRate;
  } if (salesPrice > 1000000) {
    next9MInsurance = salesPrice < 10000000 ? Math.ceil((salesPrice - 1000000) / 1000) * next9MRate : 9000 * next9MRate;
  } if (salesPrice > 10000000) {
    next5MInsurance = salesPrice < 15000000 ? Math.ceil((salesPrice - 10000000) / 1000) * next5MRate : 5000 * next5MRate;
  } if (salesPrice > 15000000) {
    restOfLoanInsurance = Math.ceil((salesPrice - 15000000) / 1000) * restRate;
  }


  return (
    Number
      (first100Insurance + second400Insurance + next500Insurance + next9MInsurance + next5MInsurance + restOfLoanInsurance).toFixed(2)
  );
}

function findRefianceInsurance(newLoanAmt, first500Rate, next4500Rate, restRate) {
    const first500Insurance = Math.max(
        newLoanAmt < 500000
        ? Math.ceil(newLoanAmt / 1000) * first500Rate
        : 500 * first500Rate,
        300
    ); // check if loan less than 100k
    let next4500Insurance = 0;
    let restOfLoanInsurance = 0;

    if (newLoanAmt > 500000) {
    next4500Insurance = newLoanAmt < 5000000 ? Math.ceil((newLoanAmt - 500000) / 1000) * next4500Rate : 4500 * next4500Rate;
    } if (newLoanAmt > 5000000) {
        restOfLoanInsurance = Math.ceil((newLoanAmt - 5000000) / 1000) * restRate;
    }

    return Number(first500Insurance + next4500Insurance + restOfLoanInsurance).toFixed(2);

}

function findDeedTax(salesPrice) {
  return Number(.5 * Math.ceil((salesPrice / 500))).toFixed(2);
}

function findMortgageTax(loanAmount) {
    return Number(.15 * Math.ceil(loanAmount / 100)).toFixed(2);
}

function ALlenderPurchase(salesPrice, loanAmount) {
  const titleCharges = {
    name: "Settlement Fees",
    "Attorney's Fee": 675,
    "Lender's Title Insurance": 250,
    "Owner's Title Insurance": Number(findTitleInsuranceCost(
      salesPrice,
      4.38,
      4.06,
      2.5,
      2.19,
      1.88,
      1.56
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
    "Estimated Recording Fee*": 95,
    "Mortgage Tax": Number(findMortgageTax(loanAmount)),
    "Deed Tax": Math.max(Number(findDeedTax(salesPrice-loanAmount)), .5),
  };

  const sellerCharges = {
    "Post-Closing Fee": 45,
    "Payoff Special Handling Fee": 45,
    "Technology Fee": 25,
  };

  return { titleCharges, recordingCharges, sellerCharges };
}

function ALcashPurcahse(salesPrice) {
  const titleCharges = {
    name: "Settlement Fees",
    "Attorney's Fee": 500,
    // "Lender's Title Insurance" : null,
    "Owner's Title Insurance": Number(findTitleInsuranceCost(
      salesPrice,
      4.38,
      4.06,
      2.5,
      2.19,
      1.88,
      1.56
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
    "Estimated Recording Fee*": 25,
    // "Mortgage Recording Fee" : null,
    "Deed Tax": Number(findDeedTax(salesPrice)),
    // "Intangible Tax" : null
  };

  const sellerCharges = {
    "Post-Closing Fee": 45,
    "Payoff Special Handling Fee": 45,
    "Technology Fee": 25,
  };

  return { titleCharges, recordingCharges, sellerCharges };
}

function ALrefinance(loanAmount) {
  const titleCharges = {
    name: "Settlement Fees",
    "Attorney's Fee": 475,
    "Lender's Title Insurance": Number(findRefianceInsurance(
      loanAmount,
      2.5,
      1.75,
      1.25
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
    "Estimated Recording Fee*": 80,
    // "Transfer Tax" : null,
    "Mortgage Tax": Number(findMortgageTax(loanAmount)),
  };

  const sellerCharges = {
    "Post-Closing Fee": null,
    "Payoff Special Handling Fee": null,
  };

  return { titleCharges, recordingCharges, sellerCharges };
}

export { ALlenderPurchase, ALcashPurcahse, ALrefinance };

// console.log(findTitleInsuranceCost(
//       10000001,
//       3.5,
//       3.25,
//       2,
//       1.75,
//       1.5,
//       1.25
//     ));

// console.log(findRefianceInsurance(
//     500001,
//     2.5,
//     1.75,
//     1.25
// ))