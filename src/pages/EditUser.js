import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectUsers } from '../redux/users/usersSlice';
import { editUser } from 'redux/users/userOperation';
import { useState } from 'react';

export const EditUser = () => {
  const { id } = useParams();
  console.log(id);

  const contacts = useSelector(selectUsers);
  console.log(contacts);

  const contact = contacts.filter(contact => contact.id === id);
  console.log(contact);

  const [name, setName] = useState(contact[0].name);
  const [email, setEmail] = useState(contact[0].email);
  const [address, setAddress] = useState(contact[0].address);
  const [phone, setPhone] = useState(contact[0].phone);
  const [avatar, setAvatar] = useState(contact[0].avatar);

  const handleChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'email':
        setEmail(event.currentTarget.value);
        break;
      case 'address':
        setAddress(event.currentTarget.value);
        break;
      case 'phone':
        setPhone(event.currentTarget.value);
        break;
      case 'avatar':
        setAvatar(event.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const dispatch = useDispatch();
  const submitEditedUser = event => {
    event.preventDefault();

    const editedUser = {
      id,
      name,
      phone,
      email,
      address,
      avatar,
    };
    console.log(editedUser);

    dispatch(editUser(editedUser));

    // const getUserData = async () => {
    //   const data = await dispatch(editUser(editedUser)).unwrap();
    //   console.log(data);
    //   return data;
    // };

    // const userId = await getUserData().then(value => {
    //   console.log(value.id);
    //   return value.id;
    // });

    // navigate(`/users/${userId}`, { replace: true });

    event.target.reset();
  };

  return (
    <form onSubmit={submitEditedUser}>
      <label>
        Name
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>

      <label>
        Phone
        <input type="text" name="phone" value={phone} onChange={handleChange} />
      </label>

      <label>
        Avatar
        <input
          type="url"
          name="avatar"
          value={avatar}
          onChange={handleChange}
        />
      </label>

      <label>
        Address
        <input
          type="text"
          name="address"
          value={address}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};
