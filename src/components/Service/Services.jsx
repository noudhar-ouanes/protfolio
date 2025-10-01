import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        {/* <h4>
          My <span className="green">COURS</span>
        </h4> */}
        <h1 className="green">Cours</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            img="/piano.png"
            title={"Cours de Piano"}
            disc={` Que vous soyez débutant ou que vous souhaitiez perfectionner vos compétences, les leçons sont conçues pour vous offrir une expérience d'apprentissage enrichissante et personnalisée.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            img="/accordeon.png"
            title={"Cours d'Accordéon"}
            disc={`Apprenez les techniques traditionnelles et explorez un répertoire varié. Laissez-vous emporter par les sonorités envoûtantes de l'accordéon et libérez votre créativité musicale.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            img="/theory.png"
            title={"Cours de Théorie Musicale"}
            disc={`Explorez les bases de la musique de manière ludique et interactive. Le programme comprend l'apprentissage du rythme, des notes, des gammes et des mélodies, tout en introduisant une variété d'instruments de musique.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }


`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  margin-bottom: 4rem;
  gap: 1rem;
`;
