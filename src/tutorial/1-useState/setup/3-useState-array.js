import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const cleanUp = function()
  { 
    setPeople([]);
  }

  const removeItem = function(id)
  {
    setPeople(
      people.filter(ele => ele.id !== id));
  };

  // use data not dom 
  // const play = function(e)
  // {
  //   console.log(e.target.parentNode);
  //   e.target.parentNode.remove();
  // }

  return <React.Fragment>
    {
      people.map(ele => 
      {
        const {id, name} = ele;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick ={() => removeItem(id)}>remove</button>
          </div>)
      })
    }
    <button className='btn' onClick={cleanUp}>Remove All</button>
  </React.Fragment>
};

export default UseStateArray;
