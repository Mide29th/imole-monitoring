import { useState, useEffect } from 'react';
import './WelcomeModal.css';

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('imole-visited');
    if (!hasVisited) {
      const timer = setTimeout(() => setIsOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('imole-visited', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={handleClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <div className="modal__content">
          <div className="modal__portrait">
            <img src="/governor-portrait.jpg" alt="Governor Adeleke" />
          </div>
          <div className="modal__text">
            <span className="modal__badge">☀ A Message from the Governor</span>
            <h2 className="modal__title">Thank You, Osun!</h2>
            <p className="modal__message">
              "It is the greatest honour of my life to serve the good people of 
              Osun State. Together, we have achieved so much — and together, we 
              will achieve even more. Imole ti de. The light has come, and it 
              will continue to shine."
            </p>
            <p className="modal__signature">
              — Governor Ademola Adeleke
            </p>
            <button className="btn btn-accent modal__cta" onClick={handleClose}>
              Explore Our Achievements
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
