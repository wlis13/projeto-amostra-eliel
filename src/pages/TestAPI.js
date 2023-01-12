import React, { useState } from 'react';
import axios from 'axios';
import '../style/textapi.css';

const TestApi = () => {

  const [users, setUsers] = useState([]);
  const [postUser, setPostUser] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/people');
      console.log(users)
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const object = {
    firstName: 'test',
    lastName: 'josefy',
    email: 'jo.gmail@trybe.com',
    phone: '236 125 4785'
  }

  const addUser = async (objec) => {
    try {
      const response = await axios
        .post('http://localhost:3001/people', objec);
      console.log(postUser);
      setPostUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="test-api">
      <form>
        <input />
      </form>
      <button onClick={ fetchUsers } type="button">Enter</button>
      <button onClick={ () => { addUser(object) } } type="button">EnterPost</button>

      { users.map((iten, index) => (
        <div key={ index }>
          <p>{ iten.first_name }</p>
          <p>{ iten.last_name }</p>
          <p>{ iten.email }</p>
          <p>{ iten.phone }</p>
        </div>
      )) }
    </div >
  );
};

export default TestApi