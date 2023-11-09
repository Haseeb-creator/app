import React, { useState } from 'react';

const App = () => {

  const [leftItems, setLeftItems] = useState([
    { id: 1, text: 'Item 1', checked: false },
    { id: 2, text: 'Item 2', checked: false },
    { id: 3, text: 'Item 3', checked: false },
  ]);

  const [rightItems, setRightItems] = useState([]);

  const handleCheckChange = (id, side) => {
    if (side === 'left') {
      setLeftItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, checked: !item.checked } : item
        )
      );
    } else {
      setRightItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, checked: !item.checked } : item
        ))
    }

  };

  const rightHandler = (side) => {
    if (side === "right") {
      const checkedTrue = leftItems.filter((item) => (item.checked === true)).map((item) => ({ ...item, checked: false }))
      setRightItems(rightItems.concat(checkedTrue))
      const unchecked = leftItems.filter((item) => (item.checked === false))
      setLeftItems(unchecked)
    } else {
      const checkedTrue = rightItems.filter((item) => (item.checked === true)).map((item) => ({ ...item, checked: false }))
      setLeftItems(leftItems.concat(checkedTrue))
      const unchecked = rightItems.filter((item) => (item.checked === false))
      setRightItems(unchecked)
    }

  }


  return (
    <div>
      <div>
        <h2>Left Side</h2>
        {leftItems.map((item) => (
          <div key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckChange(item.id, 'left')}
            />
            {item.text}
          </div>
        ))}
      </div>
      <div>
        <h2>Right Side</h2>
        {rightItems.map((item) => (
          <div key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckChange(item.id, 'right')}
            />
            {item.text}
          </div>
        ))}
      </div>
      <button onClick={() => rightHandler('left')}>Move Left</button>
      <button onClick={() => rightHandler('right')}>Move Right</button>
    </div>
  );
};

export default App;
