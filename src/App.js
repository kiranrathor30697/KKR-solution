import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Header from './Layouts/Header';
import CreateBill from './pages/CreateBill';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateBill />} />
        <Route path="/header" element={<Header />} />
        <Route path="/createbill" element={<CreateBill />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
