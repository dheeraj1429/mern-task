import './App.css';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router';
import Information from './pages/information/Information';

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="" element={<Home />} />
            <Route path="/information" element={<Information />} />
         </Routes>
      </div>
   );
}

export default App;
