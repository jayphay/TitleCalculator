import Dropdown from "../components/Dropdown";
import TransactionInputs from "../components/TransactionInputs";
import CalculateButton from "../components/CalculateButton";
import Name from "../components/Name";
import { UserProvider } from "../context/UserContext";

export default function Inputs() {
  return (
    <div className="flex items-start justify-center min-h-screen px-0 sm:px-4">
      <UserProvider>
        <div className="flex items-center justify-center bg-[#f9f9f9] rounded-md shadow-lg h-[70vh] sm:h-auto sm:aspect-square w-full max-w-none sm:max-w-[70vmin] m-2 ">
          <div className="flex flex-col shadow-md items-center sm:items-start justify-center bg-neutral-200 rounded-md p-5 size-[90%]">
            <div className="flex flex-col justify-evenly size-[90%] sm:pl-5">
              <div className="flex flex-row w-full">
                <h1 className="font-bold text-[36px] md:text-[40px] text-logo-blue-500">
                  Closing Costs Calculator
                </h1>
              </div>
              <Name />
              <Dropdown />
              <TransactionInputs />
              <CalculateButton />
            </div>
          </div>
        </div>
      </UserProvider>
    </div>
  );
}
