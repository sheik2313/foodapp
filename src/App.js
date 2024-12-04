import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Nabar';
import Recipes from './components/Recipes';
import Homepage from './components/Homepage';
import Fav from './components/Fav';
import Course from './components/course';
function App() {
  return (
   <BrowserRouter>
   <Routes>

  <Route path="/navbar" element={<Navbar/>}/> 
  <Route path='/recipes' element={<Recipes/>}/>
  <Route path='/' element={<Homepage/>}/>
  <Route path='/fav' element={<Fav/>}/>
  <Route path='course' element={< Course/>}/>


   </Routes>
   </BrowserRouter>
  );
}

export default App;
