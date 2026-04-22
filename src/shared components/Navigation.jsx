import React from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

const pages = [
  '/Products',
  '/Products2',
  '/Products3',
  '/Products4',
  '/Products5',
  '/Products6',
];

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentIndex = pages.indexOf(location.pathname);

  const handleNext = () => {
    if (currentIndex < pages.length - 1) {
      navigate(pages[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      navigate(pages[currentIndex - 1]);
    }
  };

  return (
    <div className="flex justify-center items-center gap-4 py-6">
      <div className="prev-btn">
        <button
          className="inline-flex items-center justify-center px-8 py-1 font-sans font-semibold tracking-wide btn-hover-effect text-white bg-red-800 rounded-lg h-8"
          onClick={handlePrevious}
          disabled={currentIndex <= 0}
        >
          Previous
        </button>
      </div>
      <div className="next-btn">
        <button
          className="inline-flex items-center justify-center px-8 py-1 font-sans font-semibold tracking-wide btn-hover-effect text-white bg-red-800 rounded-lg h-8"
          onClick={handleNext}
          disabled={currentIndex === -1 || currentIndex >= pages.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Navigation;
