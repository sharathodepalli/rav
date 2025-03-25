import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
//import CustomCursor from "./components/CustomCursor";
import { HomePage } from "./pages/HomePage";
import { DevelopersPage } from "./pages/DevelopersPage";
import { InnovatorsPage } from "./pages/InnovatorsPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter basename="/">
      {/* <CustomCursor /> */}
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/developers" element={<DevelopersPage />} />
          <Route path="/innovators" element={<InnovatorsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
