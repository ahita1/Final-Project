import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InvoiceForm from './pages/index';
import AuthIndex from './pages/auth/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InvoiceForm />} />
        <Route path="/auth" element={<AuthIndex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
