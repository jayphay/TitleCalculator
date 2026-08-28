import ChargesTable from "./ChargesTable";
import { useStore } from "../store/store.js";
import ChargesTableEntries from "./ChargesTableEntries.jsx";

export default function ListItems() {
  const titleCharges = useStore((state) => state.titleCharges);
  const recordingCharges = useStore((state) => state.recordingCharges);
  const total = useStore((state) => state.total);
  const transactionType = useStore((state) => state.transactionType);

  return (
    <div className="flex flex-col justify-center align-center ">
    {/* creates table for title charges */}
      <ChargesTable charges={titleCharges} /> 

      <ChargesTable charges={recordingCharges} />
      <table className="overflow-hidden rounded-b-md">
        <thead className="font-bold bg-tertiary-alt-blue-400">
          <ChargesTableEntries
            chargeName="Total"
            buyerAmt={`$${new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(total)}`}
            sellerAmt={transactionType !== "Refinance" ? "$115" : ""}
            regularCharge={false}
          />
        </thead>
      </table>
    </div>
  );
}
