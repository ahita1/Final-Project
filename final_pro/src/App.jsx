import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InvoiceForm from './pages/index';
import AuthIndex from './pages/auth/index';
import MyComponent from './pages/dashboard/index';
import Footer from './components/footer';
import Header from './components/header';
function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<InvoiceForm />} />
        <Route path="/auth" element={<AuthIndex />} />
        <Route path="/dashboard" element={<MyComponent />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
