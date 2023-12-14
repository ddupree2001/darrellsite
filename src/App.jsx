import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages';
import './App.css';
import { Layout } from './components';

const App = () => {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Layout>
  );
};

export default App;
