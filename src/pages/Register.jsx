import { useState, useEffect } from 'react';
import { Logo } from '../components';

import styled from 'styled-components';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={handleSubmit}>
        <Logo className='logo' />
        <h3>Login</h3>
        {/* name field */}
        <div className='form-control'>
          <label htmlFor='name' className='form-label'>
            Name:
          </label>
          <input
            type='text'
            name='name'
            value={values.name}
            onChange={handleChange}
            className='form-input'
          />
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </Wrapper>
  );
};
export default Register;

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    width: 100%;
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }
  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`;
