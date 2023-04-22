import landingArt from '../assets/landingArt.svg';
import styled from 'styled-components';
import { Logo } from '../components';

const logo =
  'https://res.cloudinary.com/dylvkdabj/image/upload/v1680496923/website%20pics%20family/development_logo_hpyyun.jpg';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        {/* <img src={logo} alt='woodard software logo' className='logo' />
         */}
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, ipsam
            vitae debitis libero tempore est quibusdam rerum suscipit laborum
            velit? Assumenda, consequatur sapiente unde quibusdam ab inventore
            earum sint provident.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img
          src={landingArt}
          alt='woman job hunting'
          className='img main-img'
        />
      </div>
    </Wrapper>
  );
};
export default Landing;

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .logo {
    width: 20rem;
    border-radius: var(--borderRadius);
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;
