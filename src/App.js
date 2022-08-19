
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Component/About';
import { Contact } from './Component/Contact';
import { Header } from './Component/Header';
import { Home } from './Component/Home';
import { Product } from './Component/Product';
import { Productdetails } from './Component/Productdetails';
import Tododlist from './TodiList';


function App() {
  return (
  
    <Router>

    <div className="Container">
    <Header/>
    <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Product />} />
            <Route path='/products/:id' element={<Productdetails />} />
            <Route path='/contact' element={<Contact />} />
     </Routes>
    {/* <Tododlist/> */}
    </div>
    </Router>
    
  );
}

export default App;
