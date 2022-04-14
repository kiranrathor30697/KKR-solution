import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Header from './Layouts/Header';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
