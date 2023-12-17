import HomePage from "./components/HomePage";
import { Navbar } from "./components/navbar/NavBar";
import { BrowserRouter as Router , Routes,Route,Navigate } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/"                element={<HomePage key="general"       news_category="general"/>} />
        <Route path="/science"         element={<HomePage key="science"       news_category="science"/>} />
        <Route path="/sport"           element={<HomePage key="sports"        news_category="sports"/>} />
        <Route path="/entertainment"    element={<HomePage key="entertainment" news_category="entertainment"/>} />
        <Route path="/technology"      element={<HomePage key="technology"    news_category="technology"/>} />
        <Route path="/business"        element={<HomePage key="business"      news_category="business"/>} />
        <Route path="/health"          element={<HomePage key="health"        news_category="health"/>} />
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
    </Router>
  );
}

export default App;
