import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Nav from './notes/Nav';
import Home from './notes/Home';
import CreateNote from './notes/CreateNote';
import EditNote from './notes/EditNote';
import Notfound from './notes/Notfound';

export default function Notes({setIsLogin}) {
  return (
    <BrowserRouter>    
    <div className='notes-page'>
      <Nav setIsLogin={setIsLogin}/>
      <section>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<CreateNote/>}/>
      <Route path='/edit/:id' element={<EditNote/>}/>
      <Route path='*' element={<Notfound/>}/>
      </Routes>
      </section>
    </div>
    
    </BrowserRouter>
  )
}
