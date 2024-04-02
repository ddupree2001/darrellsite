import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Testimonials, LetsTalk, Contact } from "./pages";
import "./App.css";
import { Layout } from "./components";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/letstalk" element={<LetsTalk />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
