import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../frontend/shared/components/Navbar';
import EventPostPage from '../frontend/home/pages/EventPostPage';
import IQACPage from '../frontend/iqac/pages/IQACPage';
import './index.css';

function App() {  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<EventPostPage />} />
          <Route path="/iqac" element={<IQACPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
