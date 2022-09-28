
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "pages/home";
import NossasPlantasPage from "pages/nossasPlantas";
import NotFoundPage from "pages/notFound";
import Menu from "./components/menu";

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Menu />
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="nossas-plantas" element={<NossasPlantasPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </main>
  );
}
