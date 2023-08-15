import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BackDrop, ModalContent } from './Modal.styled';
import { deleteUser } from 'redux/users/userOperation';
import { useNavigate } from 'react-router-dom';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const onContentClick = evt => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  const deleteUserById = () => {
    dispatch(deleteUser(id));
    navigate('/users', { replace: true });
  };

  return createPortal(
    <BackDrop onClick={onContentClick}>
      <ModalContent>
        <p>Are you sure?</p>
        <button onClick={deleteUserById}>Yes</button>
        <button onClick={onClose}>No-oooo</button>
      </ModalContent>
    </BackDrop>,
    modalRoot
  );
};

export default Modal;
