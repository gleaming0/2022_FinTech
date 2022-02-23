import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import ListComponent from './components/ListComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<ListComponent/>}></Route>
      </Routes>

      <Routes>
        <Route path="/" element={<Welcome/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;