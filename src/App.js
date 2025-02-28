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
import Message from './Pages/Message';
import Start from './Pages/Start';
import Account from './Pages/Account';
import Login from './Pages/Login';
import Edittraveller from './Pages/Edittraveller';
import Settings from './Pages/Settings';
import Help from './Pages/Help';
import Pcategory from './Pages/Pcategory';



function App() {
  return (
    <div className='Main'>
    <BrowserRouter>
    <Routes>
       <Route path ='/home' element={<Home></Home>} />
       <Route path ='/travellerregister' element={<Travellerregister></Travellerregister>} />
       <Route path ='/travellerlist' element={<Travellerlist></Travellerlist>} />
       <Route path ='/bookingregister' element={<Bookingregister></Bookingregister>} />
       <Route path ='/bookingtable' element={<Bookinglist></Bookinglist>} />
       <Route path ='/message' element={<Message></Message>} />
       <Route path ='/' element={<Start></Start>} />
       <Route path ='/account' element={<Account></Account>} />
       <Route path ='/loginin' element={<Login></Login>} />
       <Route path ='/edittraveller' element={<Edittraveller></Edittraveller>} />
       <Route path ='/settings' element={<Settings></Settings>} />
       <Route path ='/help' element={<Help></Help>} />
       <Route path ='/pcategory' element={<Pcategory></Pcategory>} />
    </Routes>
    </BrowserRouter>
    </div>
      
    

  );
}

export default App;
