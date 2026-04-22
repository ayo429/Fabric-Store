import React from 'react';
import { useNavigate } from 'react-router-dom';
function Button() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div>
      <button className="inline-flex items-center justify-center px-8 py-1 font-sans font-semibold text-white bg-red-800 rounded-lg btn-hover-effect" onClick={handleClick}>
        Back
      </button>
    </div>
  );
}

export default Button;
