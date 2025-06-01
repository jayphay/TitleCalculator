import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { useStore } from "../store/store";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/20/solid";
import Option from "./Option";

export default function Dropdown() {
  const { setTransaction } = useContext(UserContext);
  const transactionType = useStore((state) => state.transactionType);
  const setTransactionType = useStore((state) => state.setTransactionType);

  return (
    <div className="flex flex-col group relative w-full">
      <label
        htmlFor="Transaction"
        className="text-sm font-semibold select-none"
      >
        Choose a Transaction Type
      </label>
      <div className="w-full group relative shadow-sm p-1">
        <Listbox value={transactionType} onChange={setTransactionType}>
          <div className="relative w-full">
            <ListboxButton className="relative block w-full text-left focus:outline-none cursor-pointer">
              {transactionType}
              <ChevronDownIcon className="group pointer-events-none absolute top-0 right-2.5 size-5 fill-black/60" />
            </ListboxButton>

            <ListboxOptions
              anchor="bottom"
              className="w-(--button-width) rounded-md border-none outline-none origin-top transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0 bg-white/30 backdrop-blur-md"
              transition
            >
              <Option type={"Purchase with Financing"} />
              <Option type={"Cash Purchase"} />
              <Option type={"Refinance"} />
            </ListboxOptions>
          </div>
        </Listbox>
      </div>
    </div>
  );
}
