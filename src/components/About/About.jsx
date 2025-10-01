import React from 'react';
import styled from 'styled-components';
import { Slide } from "react-awesome-reveal";
import pianoBgr from "../../assets/pianoBgr.jpg"; 

const About = ({ onClose }) => {
  return (
    <Container id="about">
<Slide direction='left' >
      <LightColor>
        
        <ImageContainer>
          <img
            width="672"
            sizes="90%"
            style={{ maxWidth: '100%', objectFit:'contain' }} 
            src="/nijedWan.jpeg"
            alt="profile"
            
          />
          </ImageContainer>
        <Content>
          <h1 className="green">À propos de moi</h1>
          <p>
          Je suis un enseignant de musique passionné et talentueux, spécialisé dans l'accordéon, avec plus de 13 ans d'expérience dans l'enseignement de la musique. Originaire de Tunisie, j'ai récemment déménagé au Canada pour poursuivre ma passion et partager mes connaissances musicales. Je suis diplômé de l'Institut Supérieur de Musique de Sousse, Tunisie, avec une licence en art de la musique et musicologie, ainsi qu'un baccalauréat en sciences expérimentales du Lycée Fattouma Bourguiba à Monastir.
          </p>
          
          <h1 className="green">Expérience d'enseignement</h1>
          <p>
          Au Conservatoire EL Maestro Musique et Danse à Monastir, Tunisie, j'ai enseigné le piano, l'accordéon et la théorie musicale. Mon approche pédagogique personnalisée met l'accent sur la création d'un environnement d'apprentissage stimulant et inclusif, favorisant la créativité et l'expression individuelle de chaque élève. J'ai développé des programmes éducatifs adaptés à différents niveaux d'âge, de jeunes enfants à des adultes passionnés, tout en préparant mes étudiants aux examens et aux auditions.          </p>
          <h1 className="green">Compétences</h1>
          <p>
          Je suis expert dans les techniques d'accordéon et de piano, et je maîtrise également le matériel audiovisuel pour des performances de qualité. En tant qu'accordéoniste soliste, j'ai une expérience significative dans l'interprétation de répertoires variés pour différents événements, ainsi que dans l'organisation d'événements musicaux.          </p>
          <h1 className="green">Formation</h1>
          <p>
          J'ai obtenu une licence fondamentale en art de la musique et musicologie de l'Institut Supérieur de Musique de Sousse, ainsi qu'un baccalauréat en sciences expérimentales du Lycée Fattouma Bourguiba Monastir. Je suis également fluent en français, en anglais et en arabe.</p>
        </Content>
      </LightColor>
</Slide>
    </Container>
  );
};

const Container = styled.div`
  background-image: url(${pianoBgr});
  background-size: cover;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 3rem 0;
  h1{
    font-size: 1.2rem;
    padding-bottom: 1rem;
    
}

p{
    font-size: 0.8rem;
    line-height: 1.5;
    padding-bottom: 1rem;

}

`;

const Content = styled.div`
  width: 100%;
  max-width: 672px; 
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  padding: 20px;
  flex: 1;
`;

const LightColor = styled.div`
  width: 100%;
  display: flex; 
  flex-direction: row; 
  flex-wrap: wrap;
  background: linear-gradient(159deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 100%);
  padding: 20px;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
`;

const ImageContainer= styled.div`
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  align-self: center;
 
`


export default About;
