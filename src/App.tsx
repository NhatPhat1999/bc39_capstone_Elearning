import { BrowserRouter, Routes, Route } from "react-router-dom";
import renderRoutes from "./Routes";
import {Suspense} from "react"
import './App.css';

function App() {
  return (
   <Suspense fallback={<div>loadding...</div>}>
    <BrowserRouter>
      <Routes>
        {renderRoutes()}
      </Routes>
    </BrowserRouter>
   </Suspense>
  );
}

export default App;
