import React, { useState } from 'react';

const UseStateBasics = () => {
  const [title, setTitle] = useState('Default title');

  const changeTitle = function()
  {
    if(title === 'Default title')
    {
      setTitle('NOT Default title');
    }
    else
    {
      setTitle('Default title');
    }
  }

  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button type='button' className='btn'  onClick={changeTitle}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
