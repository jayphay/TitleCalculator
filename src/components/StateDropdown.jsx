import { useStore } from "../store/store";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Option from "./Option";

export default function StateDropdown() {
  const state = useStore((state) => state.state);
  const setState = useStore((state) => state.setState);

  return (
    <div className="flex flex-col group relative w-full">
      <label htmlFor="State" className="text-sm font-semibold select-none">
        Choose a State
      </label>
      <div className="w-full group relative shadow-sm p-1">
        <Listbox value={state} onChange={setState}>
          <div className="relative w-full">
            <ListboxButton className="relative block w-full text-left focus:outline-none cursor-pointer">
              {state}
              <ChevronDownIcon className="group pointer-events-none absolute top-0 right-2.5 size-5 fill-black/60" />
            </ListboxButton>

            <ListboxOptions
              anchor="bottom"
              className="w-(--button-width) rounded-md border-none outline-none origin-top transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0 bg-white/30 backdrop-blur-md"
              transition
            >
              <Option type={"Georgia"} />
              <Option type={"Alabama"} />
            </ListboxOptions>
          </div>
        </Listbox>
      </div>
    </div>
  );
}
