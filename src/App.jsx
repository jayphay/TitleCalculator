import { HashRouter, Routes, Route } from "react-router-dom";
import Inputs from "./pages/Inputs";
import LineItems from "./pages/LineItems";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Inputs />} />
        <Route path="/quote" element={<LineItems />} />
      </Routes>
    </HashRouter>
  );
}
