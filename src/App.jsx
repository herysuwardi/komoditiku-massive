import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Daftar from "./pages/login/Daftar";
import Masuk from "./pages/login/Masuk";
import Konsultasi from "./pages/layanan/Konsultasi";
import KursusOnline from "./pages/layanan/KursusOnline";
import DigitalPemasaran from "./pages/layanan/DigitalPemasaran";
import ExploreProduk from "./pages/layanan/ExploreProduk";
import DetailKursus from "./components/DetailKursusonline";
import DetailInstruktur from "./components/DetailInstruktur";
import DetailArtikel from "./components/DetailArtikel";
import DetailVideoartikel from "./components/DetailVideoartikel";

import {
  HOME,
  SERVICE,
  ABOUT,
  CONTACT,
  LOGIN,
  REGISTER,
  CONSUL,
  COURSES,
  DIGITALMARKETING,
  EXPLORE,
  PRODUKMENTAH,
  PRODUKJADI,
  DETAILKURSUS,
  DETAILINSTRUKTUR,
  DETAILARTIKEL,
  DETAILVIDEOARTIKEL,
  DETAILPRODUK,
} from "./router";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path={HOME} />
        <Route element={<Service />} path={SERVICE} />
        <Route element={<About />} path={ABOUT} />
        <Route element={<Contact />} path={CONTACT} />
        <Route element={<Daftar />} path={REGISTER} />
        <Route element={<Masuk />} path={LOGIN} />
        <Route element={<Konsultasi />} path={CONSUL} />
        <Route element={<KursusOnline />} path={COURSES} />
        <Route element={<DigitalPemasaran />} path={DIGITALMARKETING} />
        <Route element={<ExploreProduk />} path={EXPLORE} />
        <Route element={<DetailKursus />} path={DETAILKURSUS} />
        <Route element={<DetailInstruktur />} path={DETAILINSTRUKTUR} />
        <Route element={<DetailArtikel />} path={DETAILARTIKEL} />
        <Route element={<DetailVideoartikel />} path={DETAILVIDEOARTIKEL} />
      </Routes>
    </div>
  );
}

export default App;
