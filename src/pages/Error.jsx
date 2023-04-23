import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import imgRed from '../assets/error_red.svg';
import imgPrimary from '../assets/error_primary.svg';

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={imgPrimary} alt='not-found' />
        <h3>Oops! Page Not Found</h3>
        <p>we can't seem to find the page you are looking for</p>
        <Link to='/'>home</Link>
      </div>
    </Wrapper>
  );
};
export default Error;

const Wrapper = styled.main`
  text-align: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
  }
`;
