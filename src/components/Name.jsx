import { useStore } from "../store/store";

export default function Name() {
  const name = useStore((state) => state.name);
  const setName = useStore((state) => state.setName);

  return (
    <div className="flex flex-col group relative w-full select-none">
      <label htmlFor="name" className="text-sm font-semibold">
        Name or Property Address
      </label>

      <input
        type="text"
        placeholder="Enter address or name of quote"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="outline-none border-b-1 border-sp-lg-500 focus:border-transparent "
      />
      <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-logo-blue-500 transition-all duration-150 group-focus-within:left-0 group-focus-within:w-full"></span>
    </div>
  );
}
