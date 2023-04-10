import { BrowserRouter, Routes, Route } from "react-router-dom";
import renderRoutes from "./Routes";
import {Suspense} from "react"
import './App.css';
import Loading from "./pages/HomeTemplate/Loading";

function App() {
  return (
   <Suspense fallback={<Loading/>}>
    <BrowserRouter>
      <Routes>
        {renderRoutes()}
      </Routes>
    </BrowserRouter>
   </Suspense>
  );
}

export default App;
