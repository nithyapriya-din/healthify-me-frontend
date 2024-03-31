import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Active from './Active';
import Lang from './Lang';
import Name from './Name';
import Health from './Health'; 
import SignIn from './SignIn';
import SignUp from './SignUp';
import Where from './where';
import What1 from './What1';
import Welcome from './Welcome';
import AgeHeightWeight from './AgeHeightWeight';
import Gender from './Gender';

export default function App() {
  return (
    <div>
      
      <HashRouter>
        <Routes>
        <Route path="/" element={<Welcome />} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path="/what" element={<What1 />} />
          <Route path="/where" element={<Where />} />
          <Route path="/name" element={<Name />} />
          <Route path="/lang" element={<Lang />} />
          <Route path="/gen" element={<Gender />} />
          <Route path="/age" element={<AgeHeightWeight/>} />
          <Route path="/active" element={<Active />} />
          <Route path="/next" element={<Health/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}
