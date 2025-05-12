import { useEffect, useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function MobileToast() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkMobilePortrait = () => {
        const isSmallScreen = window.innerWidth <= 980;
        setShow(isSmallScreen);
    };
    console.log("show:",show)
    checkMobilePortrait();

    window.addEventListener('resize', checkMobilePortrait);
    window.addEventListener('orientationchange', checkMobilePortrait);

    return () => {
      window.removeEventListener('resize', checkMobilePortrait);
      window.removeEventListener('orientationchange', checkMobilePortrait);
    };
  }, []);

  return (
    <ToastContainer
      position="top-center"
      className="p-3"
      style={{ zIndex: 9999 }}
    >
      <Toast
        bg="dark"
        show={show}
        onClose={() => setShow(false)}
        delay={10000}
        autohide
      >
        <Toast.Header>
          <strong className="me-auto">⚠️ Notice</strong>
        </Toast.Header>
        <Toast.Body>
          This application is not fully optimized for mobile portrait view.<br />
          Please rotate your screen for a better experience.
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default MobileToast;
