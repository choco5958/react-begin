import React, { useRef, useState } from 'react';
import UserList2 from './UserList2';
import CreateUser2 from './CreateUser2';

function App2() {
    
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
        id: nextId.current,
        username,
        email
      };
    setUsers([...users, user]);

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };
  return (
    <>
      <CreateUser2
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList2 users={users} />
    </>
  );
}

export default App2;