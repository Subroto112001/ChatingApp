import React from 'react'

const Button = ({ design, content, SignHandle }) => {
  return (
    <>
      <button className={design} onClick={SignHandle}>

        {content}
      </button>
    </>
  );
};

export default Button