import React, { useEffect, useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const [bar, setBar] = useState(false);
  const [sectionMounted, setSectionMounted] = useState(false);
  const history = useNavigate();

  useEffect(() => {
      scrollToSection(sectionMounted);
  }, [sectionMounted]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToSection = (section) => {
    console.log('section: ', section);
   if( section==="about") {
      setBar(false);
      history('/about')
      }else
    { setSectionMounted(section);
      setBar(false);
      history('/'); }
};


  return (
    <Container bar={bar}>
      <Logo>
        <span className='green'>
          <img
          onClick={() => handleNavigateToSection('home')}
            style={{ width: 50, height: 50 }}
            src="/musicHeart.png"
            alt="profile"
          />
        </span>
      </Logo>
      <Nav bar={bar}>
        <span><p onClick={() => handleNavigateToSection('home')}>Accueil</p></span>
        <span><p onClick={()=>handleNavigateToSection('service')}>Cours</p></span>
        <span><p onClick={() => handleNavigateToSection('project')}>Projects</p></span>
        <span><p onClick={() => handleNavigateToSection('client')}>Témoignages</p></span>
        <span><text><Link to="/about" onClick={() => handleNavigateToSection('about')}>À propos</Link></text></span>
        <span><p onClick={() => handleNavigateToSection('footer')}>Contact</p></span>
      </Nav>
      <div
        onClick={() => setBar(!bar)}
        className="bars">
        <div className="bar"></div>
      </div>
    </Container>
  );
}


export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem 0;
  position: relative;
  animation: header 500ms ease-in-out;
  @media (max-width: 840px) {
    width: 90%;
  }
  .bars {
    display: none;
  }
  @media (max-width: 640px) {
    .bars {
      width: 40px;
      height: 40px;
      position: fixed; 
      top: 20px;      
      right: 20px;    
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      z-index: 9999;
      .bar {
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: ${props => props.bar ? "transparent" : "#fff"};
        transition: all 400ms ease-in-out;
        :before,
        :after {
          content: "";
          width: 100%;
          height: 2px;
          background-color: #fff;
          position: absolute;
        }

        :before {
          transform: ${props => props.bar ? "rotate(45deg)" : "translateY(10px)"};
          transition: all 400ms ease-in-out;
        }

        :after {
          transform: ${props => props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
          transition: all 400ms ease-in-out;
        }
      }
    }
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  span {
    font-size: 1.8rem;
  }
`

const Nav = styled.div`
  @media (max-width: 640px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: #01be96;
    inset: 0;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    gap: 2rem;
    font-weight: 700;
    height: ${props => props.bar ? "100vh" : 0};
    transition: height 400ms ease-in-out;
    overflow: hidden;
    z-index: 100;
  },
  span {
    margin-right: 1rem;
    
  }
  p {
    cursor: pointer;
    display: inline; /* Display <p> elements inline */
    margin: 0; /* Reset default margins */
    @media (max-width: 640px) {
      /* Other styles omitted for brevity */
  
      /* Transition applied to the height property */
      height: ${props => props.bar ? "100vh" : 0};
      transition: height 400ms ease-in-out;
    } text-decoration: none;
    font-weight: 400;
    position: relative;
    :before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px;
      height: 2px;
      background-color: #fff;
      transform: scale(0);
      transform-origin: right;
      transition: transform 400ms ease-in-out;
    }
    :hover:before {
      transform: scale(1);
      transform-origin: left;
    }
    :hover {
      opacity: 0.7;
    }
  }
  text {
    a {
      color: #fff;
      text-decoration: none;
      font-weight: 400;
      position: relative;
      :before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        height: 2px;
        background-color: #fff;
        transform: scale(0);
        transform-origin: right;
        transition: transform 400ms ease-in-out;
      }
      :hover:before {
        transform: scale(1);
        transform-origin: left;
      }
      :hover {
        opacity: 0.7;
      }
    }
  }
`
