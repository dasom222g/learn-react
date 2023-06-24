import React from 'react';

const MyBox = ({ person, edit }) => {
  const { name, gender } = person;
  // logic
  const handleClick = () => {
    // if (name !== 'Dasom') return;
    const editedPerson = {
      ...person,
      name: 'Seonhyeog',
      gender: 'male',
    };
    edit(editedPerson);
  };

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
        <span style={{ display: 'block' }}>{`Hello world ${name}!`}</span>
        <span style={{ display: 'block' }}>{`gender: ${gender}!`}</span>
        <button type="button" onClick={handleClick}>
          선혁, male로 수정
        </button>
      </div>
      {/* <div className={isComplete ? 'complete' : ''}>박스2</div> */}
    </>
  );
};

export default MyBox;
