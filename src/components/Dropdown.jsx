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

export default function Dropdown() {
  const { setTransaction } = useContext(UserContext);
  const transactionType = useStore((state) => state.transactionType);
  const setTransactionType = useStore((state) => state.setTransactionType);

  return (
    <div className="flex flex-col">
      <label
        htmlFor="Transaction"
        className="text-sm font-semibold select-none"
      >
        Choose a Transaction Type
      </label>
      <div className="w-full max-w-md shadow-sm p-1">
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
              <ListboxOption
                value="Purchase with Financing"
                className="cursor-pointer data-focus:bg-neutral-300 group flex gap-2 rounded-md mx-1 my-1 px-1"
              >
                <div className="flex flex-row justify-between w-full items-center ">
                  <span>Purchase with Financing</span>
                  <CheckIcon className="invisible size-5 fill-logo-blue-500 group-data-selected:visible " />
                </div>
              </ListboxOption>
              <ListboxOption
                value="Cash Purchase"
                className=" cursor-pointer data-focus:bg-neutral-300  group flex gap-2 rounded-md mx-1 my-1 px-1"
              >
                <div className="flex flex-row justify-between w-full items-center ">
                  <span>Cash Purchase</span>
                  <CheckIcon className="invisible size-5 fill-logo-blue-500 group-data-selected:visible" />
                </div>
              </ListboxOption>
              <ListboxOption
                value="Refinance"
                className="cursor-pointer data-focus:bg-neutral-300  group flex gap-2 rounded-md mx-1 my-1 px-1"
              >
                <div className="flex flex-row justify-between w-full items-center ">
                  <span>Refinance</span>
                  <CheckIcon className="invisible size-5 fill-logo-blue-500 group-data-selected:visible" />
                </div>
              </ListboxOption>
            </ListboxOptions>
          </div>
        </Listbox>
      </div>
    </div>
  );
}
