import { useState, useEffect } from 'react';
import { Logo, FormRow } from '../components';
import { toast } from 'react-toastify';

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
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}: ${value}`);
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error('Please fill out all fields');
      return;
    }
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={handleSubmit}>
        <Logo className='logo' />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {/* name field */}
        <div className='form-control'>
          {!values.isMember && (
            <FormRow
              type='text'
              name='name'
              value={values.name}
              handleChange={handleChange}
            />
          )}
          <FormRow
            type='email'
            name='email'
            value={values.email}
            handleChange={handleChange}
          />
          <FormRow
            type='password'
            name='password'
            value={values.password}
            handleChange={handleChange}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          {values.isMember ? 'Not a member?' : 'Already a member?'}
          <button type='button' className='member-btn' onClick={toggleMember}>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
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
