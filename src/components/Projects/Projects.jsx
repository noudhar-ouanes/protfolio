import React from 'react'
import styled from 'styled-components';
import SliderComp from './Slider';
import { Zoom } from 'react-awesome-reveal';

const Projects = () => {
  return (
    <Container id='project'>
        <Zoom>
            <h1>Projets <span className="green">Récents</span></h1>
            <p>Je suis fier de vous présenter quelques-unes des réalisations exceptionnelles de mes élèves, bénéficiant de mon encadrement direct et de mon soutien. Chacune de ces prestations témoigne non seulement du talent et de l'engagement de mes étudiants, mais également de l'efficacité de mon accompagnement pédagogique.</p>
        </Zoom>
        <Slide>
            <SliderComp/>
        </Slide>
    </Container>
  )
}

export default Projects;

const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    position: relative;
    @media(max-width: 840px){
        width: 90%;
    }
    h1{
        font-size: 1.9rem;
    }

    p{
        width: 38rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media(max-width : 500px){
            width: 90%;
        }
        line-height: 1.5;
    }
    
`

const Slide = styled.div``