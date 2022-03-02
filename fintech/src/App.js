import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import ListComponent from './components/ListComponent';
import AxiosTest from "./pages/AxiosTest";
import NewsApiPage from "./pages/NewsApiPage";
import AuthPage from "./pages/AuthPage";
import AuthResult from "./pages/AuthResult";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<ListComponent />}></Route>
      </Routes>
      <Routes>
        <Route path="/axiosTest" element={<AxiosTest />}></Route>
      </Routes>
      <Routes>
        <Route path="/news" element={<NewsApiPage />}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<AuthPage />}></Route>
      </Routes>
      <Routes>
        <Route path="/authResult" element={<AuthResult />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;