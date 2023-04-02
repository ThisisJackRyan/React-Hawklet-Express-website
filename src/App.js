
import './App.css';

import Header from "./Header"
import Home from "./pages/Home";
import Account from "./pages/Account";
import Order from "./pages/Order"
import About from "./pages/About"
import {Route, Routes} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route  path="/Account" element={<Account />} />
        <Route  path="/Order" element={<Order />} />
        <Route  path="/About" element={<About />} />
     </Routes>
    </div>
  );
}

export default App;
