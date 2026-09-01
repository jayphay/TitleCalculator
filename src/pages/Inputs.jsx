import Dropdown from "../components/Dropdown";
import StateDropdown from "../components/StateDropdown";
import TransactionInputs from "../components/TransactionInputs";
import CalculateButton from "../components/CalculateButton";
import Name from "../components/Name";
import { UserProvider } from "../context/UserContext";

export default function Inputs() {
  return (
    <div className="flex items-start justify-center min-h-screen py-6 sm:py-12">
      <UserProvider>
        <div className="flex items-center justify-center bg-primary-green-500 rounded-xl shadow-lg min-h-[80vh] md:min-h-[70vh] w-full max-w-none sm:max-w-[70vmin] m-2 p-3 sm:py-10">
          <div className="flex flex-col shadow-md items-center sm:items-start justify-center bg-[#f9f9f9] rounded-lg md:p-5 p-2 w-[90%]">
            <div className="flex flex-col justify-evenly w-[90%] sm:pl-5 gap-3">
              <div className="flex flex-row w-full">
                <h1 className="font-bold text-[36px] md:text-[40px] text-black">
                  Closing Costs Calculator
                </h1>
              </div>
              <Name />
              <StateDropdown />
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
