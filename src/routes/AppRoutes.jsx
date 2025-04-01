import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Service1 from '../pages/service1/Home';
import Service2 from '../pages/service2/Home';
import Service3 from '../pages/service3/Home';
import Service4 from '../pages/service4/Home';
import Service5 from '../pages/service5/Home';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service1" element={<Service1 />} />
        <Route path="/Service2" element={<Service2 />} />
        <Route path="/Service3" element={<Service3 />} />
        <Route path="/Service4" element={<Service4 />} />
        <Route path="/Service5" element={<Service5 />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
