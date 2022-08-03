import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { About } from "./pages/About";
import { Products } from "./pages/Products";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
