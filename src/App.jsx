import { Home } from "./pages/Home/Home";
import {Quiz} from "./pages/Quiz/Quiz";
import { ResultPage } from "./pages/ResultPage/ResultPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz/>}/>
          <Route path="/result" element={<ResultPage/>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
export default App