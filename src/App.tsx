import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DirectoryPage from "./pages/DirectoryPage";
import ProviderPage from "./pages/ProviderPage";
import AboutPage from "./pages/AboutPage";
import AddPage from "./pages/AddPage";
import RequestPage from "./pages/RequestPage";
import { ThemeProvider } from "@/components/theme-provider";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/directory" element={<DirectoryPage />} />
          <Route path="/provider/:id" element={<ProviderPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/request" element={<RequestPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
