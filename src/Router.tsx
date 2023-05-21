import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./pages/App";
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./pages/home/home";
import { Register } from "./pages/register/resgister";

export function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" Component={Home} />
        <Route path="/register" Component={Register} />
      </Routes>
    </BrowserRouter>
  );
}
