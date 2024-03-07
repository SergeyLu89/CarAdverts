import css from './Modal.module.css';
import { ReactComponent as CrossSvg } from '../../icons/cross.svg';
import { useCallback, useEffect } from 'react';

const Modal = ({ children, isOpen, closeFnc }) => {
  const closeOnClick = useCallback(() => {
    if (isOpen) {
      closeFnc();
    }
  }, [isOpen, closeFnc]);

  useEffect(() => {
    const onPressEsc = event => {
      if (event.code === 'Escape') {
        closeOnClick();
      }
    };

    window.addEventListener('keydown', onPressEsc);

    return () => {
      window.removeEventListener('keydown', onPressEsc);
    };
  }, [closeOnClick]);

  const onOverlayClick = event => {
    if (event.target === event.currentTarget) {
      closeOnClick();
    }
  };

  return (
    <div className={css.backdrop} onClick={onOverlayClick}>
      <div className={css.modal}>
        <button className={css.modalCloseBtn} onClick={closeOnClick}>
          <CrossSvg width={24} height={24} />
        </button>
        <h2>HAHAHAHAHAAAAAAAAAAAAAAAAAAAA</h2>
      </div>
      ;
    </div>
  );
};
export default Modal;
