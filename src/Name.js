import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Name() {
  const [name, setName] = useState('');
  const navigate= useNavigate();

  const handleSubmit = async () => {
    if(name){
      navigate('/next')
    }
    else{
      alert('Enter Your Name')
    }
  };

  return (
    <div className='text-center container'>
      <h2>Hey there!</h2> <br/>
      <p>We are happy that you have taken the first step towards a healthier you. <br/>Let's kick-start your journey.</p> <br/>
      <form>
        <label htmlFor="name" className="fs-3"> What is Your Name?</label> <br/> <br/>
        <input
          type="text"
          placeholder="Enter Your Name "
          id="name"
          className="w-50 fs-5 text-center"
          onChange={(e) => setName(e.target.value)}
        />
        <br/> <br/>   
        <button className="btn btn-next btn-dark" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Name;
