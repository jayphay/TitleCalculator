import { useNavigate } from "react-router-dom";
import ListItems from "../components/ListItems";
import QuoteInfo from "../components/QuoteInfo";
import { UserContext, UserProvider } from "../context/UserContext";
import { useStore } from "../store/store.js";
import React, { useContext } from "react";
import QuotePdf from "../components/pdfcomponents/QuotePdf.jsx";
import { PDFDownloadLink } from "@react-pdf/renderer";
import {
  titleCharges,
  recordingCharges,
  sellerCharges,
} from "../utils/calculations.js";
import Note from "../components/Note.jsx";
import Disclaimer from "../components/Disclaimer.jsx";

export default function LineItems() {
  const navigate = useNavigate();
  const resetHasAdded = useStore((state) => state.resetHasAdded);
  const name = useStore((state) => state.name);
  const transactionType = useStore((state) => state.transactionType);
  const salePrice = useStore((state) => state.salesPrice);
  const loanAmount = useStore((state) => state.loanAmount);
  const total = useStore((state) => state.total);

  const handleClick = () => {
    navigate("/");

    useStore.getState().resetHasAdded();
    useStore.getState().resetTotal();
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-0 sm:px-4">
      <UserProvider>
        <div className="flex items-center justify-center bg-[#f9f9f9] rounded-md shadow-lg h-auto w-full max-w-none sm:max-w-[90vmin] smd:max-w-[80vmin] m-2">
          <div className="flex flex-col shadow-md items-center smd:items-start justify-center bg-neutral-200 rounded-md p-1 smd:p-3 size:[100%] smd:size-[90%] smd:my-7">
            <div className="flex flex-col justify-evenly size-[98%] smd:size-[90%] smd:pl-5">
              <QuoteInfo />
              <ListItems />
              <div className="flex flex-row justify-start align-center gap-3 pt-3 pb-1.5 smd:pb-0">
                <button
                  onClick={handleClick}
                  className="rounded-xl bg-sp-lb-600 cursor-pointer disabled:cursor-not-allowed shadow-md p-3 font-semibold disabled:opacity-50 hover:bg-sp-lb-900 active:translate-y-1"
                >
                  Edit
                </button>
                <PDFDownloadLink
                  document={
                    <QuotePdf
                      name={name}
                      transactionType={transactionType}
                      salePrice={salePrice}
                      loanAmount={loanAmount}
                      recordingCharges={recordingCharges}
                      titleCharges={titleCharges}
                      sellerCharges={sellerCharges}
                      total={total}
                    />
                  }
                  fileName={`title-quote-for-${name}`}
                >
                  {({ blob, url, loading, error }) => (
                    <button
                      disabled={loading}
                      className="rounded-xl bg-sp-lb-600 cursor-pointer disabled:cursor-not-allowed shadow-md p-3 font-semibold disabled:opacity-50 hover:bg-sp-lb-900 active:translate-y-1"
                    >
                      {loading ? "Loading document..." : "Download PDF"}
                    </button>
                  )}
                </PDFDownloadLink>
              </div>

              <Note />

              <Disclaimer />
            </div>
          </div>
        </div>
      </UserProvider>
    </div>
  );
}
