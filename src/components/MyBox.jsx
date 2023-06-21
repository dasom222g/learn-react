import React from 'react';

const MyBox = () => {
  // logic
  const name = '';
  const textLeft = 'text-align-left';

  // view
  return (
    <>
      <div
        style={{
          border: '1px solid red',
          padding: '10px',
          backgroundColor: 'yellow',
          color: '#000',
        }}
      >
        {name}
        {textLeft}
      </div>
      {/* <div className={isComplete ? 'complete' : ''}>박스2</div> */}
      <div>박스3</div>
    </>
  );
};

export default MyBox;
