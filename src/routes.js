
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "pages/home";
import NossasPlantasPage from "pages/nossasPlantas";
import NotFoundPage from "pages/notFound";
import Menu from "./components/menu";
import { RecoilRoot } from "recoil";

export default function AppRouter() {
  return (
    <main className="container">
      <BrowserRouter>
        <RecoilRoot>
          <Menu />
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="nossas-plantas" element={<NossasPlantasPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          {/* <Footer /> */}
        </RecoilRoot>
      </BrowserRouter>
    </main>
  );
}
