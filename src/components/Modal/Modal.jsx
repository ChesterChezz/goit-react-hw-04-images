import React, { useEffect, useCallback } from 'react';

const Modal = ({ src, alt, closeModal }) => {
  const handleEscKey = useCallback(
    event => {
      if (event.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  const handleOverlayClick = event => {
    if (event.target.classList.contains('overlay')) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [handleEscKey]);

  return (
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default Modal;
