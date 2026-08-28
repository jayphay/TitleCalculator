import { useStore } from "../store/store";
import { useNavigate } from "react-router-dom";

export default function ResetButton() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");

    useStore.getState().resetHasAdded();
    useStore.getState().resetTotal();
    useStore.getState().resetAll();
  }
  return (
    <div className="ml-auto">
      <button
        onClick={handleClick}
        className="rounded-xl bg-cta-yellow-500 cursor-pointer disabled:cursor-not-allowed shadow-md p-3 font-semibold disabled:opacity-50 hover:bg-cta-alt-yellow-500 active:translate-y-1"
      >
        New Quote
      </button>
    </div>
  );
}
