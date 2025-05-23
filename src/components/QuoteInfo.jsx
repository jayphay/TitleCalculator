import { useStore } from "../store/store";

export default function QuoteInfo() {
  const name = useStore((state) => state.name);
  const salesPrice = useStore((state) => state.salesPrice);
  const loanAmount = useStore((state) => state.loanAmount);
  const transactionType = useStore((state) => state.transactionType);

  return (
    <div className="flex flex-col font-bold">
      <h1 className="text-[32px]">Quote for: {name}</h1>
      <div className="flex flex-row gap-2 py-3">
        {transactionType == "Purchase with Financing" ||
        transactionType == "Cash Purchase" ? (
          <h3>
            Sales Price: $
            {new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(salesPrice)}
          </h3>
        ) : (
          ""
        )}

        {transactionType == "Purchase with Financing" ||
        transactionType == "Refinance" ? (
          <h3>
            Loan Amount: $
            {new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(loanAmount)}
          </h3>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
