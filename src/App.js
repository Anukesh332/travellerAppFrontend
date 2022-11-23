import{Routes,Route,BrowserRouter} from 'react-router-dom';
import logo from './images/godrejlogo.png';
import theone1 from './images/theone.jpg';
import gstatus from './images/gstatus.jpg';
import './App.css';
import Home from './Pages/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils';
import Travellerregister from './Pages/Travellerregister';
import Travellerlist from './Pages/Travellerlist';
import Bookingregister from './Pages/Bookingregister';
import Bookinglist from './Pages/Bookinglist';



function App() {
  return (
    <div className='Main'>
    <BrowserRouter>
    <Routes>
       <Route path ='/' element={<Home></Home>} />
       <Route path ='/travellerregister' element={<Travellerregister></Travellerregister>} />
       <Route path ='/travellerlist' element={<Travellerlist></Travellerlist>} />
       <Route path ='/bookingregister' element={<Bookingregister></Bookingregister>} />
       <Route path ='/bookingtable' element={<Bookinglist></Bookinglist>} />
    </Routes>
    </BrowserRouter>
    </div>
      
    

  );
}

export default App;
