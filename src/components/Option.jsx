import { ListboxOption } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

export default function Option({ type }) {
  return (
    <ListboxOption
      value={type}
      className="cursor-pointer data-focus:bg-neutral-300 group flex gap-2 rounded-md mx-1 my-1 px-1"
    >
      <div className="flex flex-row justify-between w-full items-center ">
        <span>{type}</span>
        <CheckIcon className="invisible size-5 fill-logo-blue-500 group-data-selected:visible " />
      </div>
    </ListboxOption>
  );
}
