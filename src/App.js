import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Services from "./components/Service/Services";
import About from "./components/About/About";
import pianoBgr from "./assets/pianoBgr.jpg"; 

function App() {
  return (
    <Router>
      <Container>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <Routes>
        <Route path="/" element={<><Banner>
          <ProfComponent />
        </Banner>
        <Services />
        <LightColor>
          <Projects />
        </LightColor>
        <Clients />
        <LightColor>
          <Footer />
        </LightColor></>}>
        </Route>
        <Route path="/about" element={<About />}/>
        </Routes>
      </Container>

    </Router>
  );
}

export default App;

const View = styled.div``;
const Container = styled.div``;
const HeaderContainer = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;

const Banner = styled.div`
  background-image: url(${pianoBgr});
  background-size: cover;
  height: 600px; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;
