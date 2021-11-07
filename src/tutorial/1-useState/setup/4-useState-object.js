import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'hello bro',
  });

  const changeMessage = function()
  {
    if(person.message === 'hello bro')
    {
      console.log(person.message);
      setPerson({...person, message : 'hello bro again'});
    }
    else
    {
      console.log(person.message);
      setPerson({...person, message : 'hello bro'});
    }
  }


  return <>
    <h2>{person.name}</h2>
    <h2>{person.age}</h2>
    <h2>{person.message}</h2>
    <button className='btn' onClick={changeMessage}>Change msg</button>
  </>;
};

export default UseStateObject;
