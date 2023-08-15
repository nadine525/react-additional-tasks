import { useDispatch, useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import { getUserId } from 'redux/users/userOperation';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Modal from 'components/Modal/Modal';
import { StyledLink } from './UserDetailPage.styled';

export const UserDetailsPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const params = useParams();
  const curentUser = useSelector(state => state.currentUser);
  // console.log(curentUser);

  const onClose = () => setIsOpenModal(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserId(params.id));
  }, [dispatch, params.id]);

  return (
    curentUser && (
      <>
        <h2>{curentUser.name}</h2>
        <p>{curentUser.email}</p>
        <p>{curentUser.phone}</p>
        <img src={curentUser.avatar} alt={curentUser.name} />
        <button
          onClick={() => {
            setIsOpenModal(true);
          }}
        >
          Delete
        </button>
        {isOpenModal && <Modal onClose={onClose} id={params.id} />}

        <StyledLink to="edit">Edit</StyledLink>
      </>
    )
  );
};
