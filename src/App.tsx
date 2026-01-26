import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
//import CustomCursor from "./components/CustomCursor";
import { HomePage } from "./pages/HomePage";
import { InvoiceAutomationPage } from "./pages/InvoiceAutomationPage";
import { DevelopersPage } from "./pages/DevelopersPage";
import { InnovatorsPage } from "./pages/InnovatorsPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter basename="/">
      {/* <CustomCursor /> */}
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/invoice-automation"
            element={<InvoiceAutomationPage />}
          />
          <Route path="/developers" element={<DevelopersPage />} />
          <Route path="/innovators" element={<InnovatorsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
