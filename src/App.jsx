import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import AddMedicine from "./pages/AddMedicine.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import MedicineDetail from "./pages/MedicineDetail.jsx";
import MedicationTracker from "./pages/MedicationTracker.jsx";
import FAQ from "./pages/FAQ.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/user-profile" element={<UserProfile />} />
          <Route exact path="/add-medicine" element={<AddMedicine />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/medicine-detail" element={<MedicineDetail />} />
          <Route exact path="/medication-tracker" element={<MedicationTracker />} />
          <Route exact path="/faq" element={<FAQ />} />
          <Route exact path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;