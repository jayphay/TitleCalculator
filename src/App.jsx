import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inputs from './pages/Inputs';
import LineItems from './pages/LineItems';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inputs />}/>
        <Route path="/quote" element={<LineItems />} />
      </Routes>
    </BrowserRouter>
    
  )
}

