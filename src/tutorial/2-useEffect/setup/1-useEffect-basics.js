import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(10);
  useEffect(() => {
    console.log('rawrrr');
  }, [value2]);

  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
      <h1>{value2}</h1>
      <button className='btn' onClick={() => setValue2(value2 + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
