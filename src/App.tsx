import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';
import ProtectedAdminRoute from './components/ProtectedAdminRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import ContactPage from './pages/ContactPage';
import AboutUs from './pages/AboutUs';
import ViewAllServices from './pages/ViewAllServices';
import BecomePartner from './pages/BecomePartner';
import ProgramsPage from './pages/ProgramsPage';
import StudyAbroadPage from './pages/StudyAbroadPage';
import NewZealandPage from './pages/NewZealandPage';
import MauritiusPage from './pages/MauritiusPage';
import MaltaPage from './pages/MaltaPage';
import MalaysiaPage from './pages/MalaysiaPage';
import SingaporePage from './pages/SingaporePage';
import PreDepartureChecklistPage from './pages/PreDepartureChecklistPage';
import ScholarshipsArticlePage from './pages/ScholarshipsArticlePage';
import ChooseCountryArticlePage from './pages/ChooseCountryArticlePage';
import BenefitsArticlePage from './pages/BenefitsArticlePage';
import AdminLayout from './admin/AdminLayout';
import AdminDashboard from './admin/AdminDashboard';
import AdminCountries from './admin/AdminCountries';
import AdminPrograms from './admin/AdminPrograms';
import AdminServices from './admin/AdminServices';
import AdminPartners from './admin/AdminPartners';
import AdminContacts from './admin/AdminContacts';
import AdminTestimonials from './admin/AdminTestimonials';
import './index.css';

function App() {
  return (
    <DataProvider>
      <AuthProvider>
        <Router>
          <Toaster position="top-right" />
          <Routes>
          <Route path="/" element={
            <div className="min-h-screen bg-white">
              <Navbar />
              <Home />
              <Footer />
            </div>
          } />
          <Route path="/about" element={
            <div className="min-h-screen bg-white">
              <Navbar />
              <AboutUs />
              <Footer />
            </div>
          } />
          <Route path="/contact" element={
            <div className="min-h-screen bg-white">
              <Navbar />
              <ContactPage />
              <Footer />
            </div>
          } />
          <Route path="/viewallservices" element={
            <div className="min-h-screen bg-white">
              <Navbar />
              <ViewAllServices />
              <Footer />
            </div>
          } />
          <Route path="/become-a-partner" element={
            <div className="min-h-screen bg-white">
              <Navbar />
              <BecomePartner />
              <Footer />
            </div>
          } />
          <Route path="/programs" element={
            <div className="min-h-screen bg-white">
              <Navbar />
              <ProgramsPage />
              <Footer />
            </div>
          } />
          <Route path="/study-abroad" element={
            <div className="min-h-screen bg-white">
              <Navbar />
              <StudyAbroadPage />
              <Footer />
            </div>
          } />
          <Route path="/new-zealand" element={
            <div className="min-h-screen bg-white">
              <Navbar />
              <NewZealandPage />
              <Footer />
            </div>
          } />
          <Route path="/mauritius" element={
            <div className="min-h-screen bg-white">
              <Navbar />
              <MauritiusPage />
              <Footer />
            </div>
          } />
          <Route path="/malta" element={
            <div className="min-h-screen bg-white">
              <Navbar />
              <MaltaPage />
              <Footer />
            </div>
          } />
          <Route path="/malaysia" element={
            <div className="min-h-screen bg-white">
              <Navbar />
              <MalaysiaPage />
              <Footer />
            </div>
          } />
          <Route path="/singapore" element={
            <div className="min-h-screen bg-white">
              <Navbar />
              <SingaporePage />
              <Footer />
            </div>
          } />
          <Route path="/blogs/essential-pre-departure-checklist-for-students-going-abroad" element={
            <div className="min-h-screen bg-white">
              <Navbar />
              <PreDepartureChecklistPage />
              <Footer />
            </div>
          } />
          <Route path="/blogs/scholarships-every-international-student-should-know-about" element={
            <div className="min-h-screen bg-white">
              <Navbar />
              <ScholarshipsArticlePage />
              <Footer />
            </div>
          } />
          <Route path="/blogs/how-to-choose-the-right-country-to-study-abroad" element={
            <div className="min-h-screen bg-white">
              <Navbar />
              <ChooseCountryArticlePage />
              <Footer />
            </div>
          } />
          <Route path="/blogs/top-5-benefits-of-studying-abroad" element={
            <div className="min-h-screen bg-white">
              <Navbar />
              <BenefitsArticlePage />
              <Footer />
            </div>
          } />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={
            <ProtectedAdminRoute>
              <AdminLayout />
            </ProtectedAdminRoute>
          }>
            <Route index element={<AdminDashboard />} />
            <Route path="countries" element={<AdminCountries />} />
            <Route path="programs" element={<AdminPrograms />} />
            <Route path="services" element={<AdminServices />} />
            <Route path="partners" element={<AdminPartners />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="testimonials" element={<AdminTestimonials />} />
          </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </DataProvider>
  );
}

export default App;
