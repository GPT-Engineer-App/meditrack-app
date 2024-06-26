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
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route exact path="/user-profile" element={<UserProfile />} />
            <Route exact path="/add-medicine" element={<AddMedicine />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/medicine-detail" element={<MedicineDetail />} />
            <Route exact path="/medication-tracker" element={<MedicationTracker />} />
            <Route exact path="/faq" element={<FAQ />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;