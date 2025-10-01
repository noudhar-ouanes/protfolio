import React from 'react';
import styled from 'styled-components';

const Project = (props) => {
    const { type, source,  } = props.item;
    return (
        <Container className='project'>
            {type === 'image' ? (
                <img 
                    src={source} 
                    alt="project" 
                />
            ) : (
                <video controls>
                    <source 
                    src={source} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
        </Container>
    );
};

export default Project;

const Container = styled.div`
    height: 15rem;
    background-color: #4e5156;
    margin: 0 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    
    img, video {
        width: 100%;
        height: 100%;
        object-fit: contain; /* Resize mode */
        transition: transform 400ms ease-in-out;
    }

    .disc {
        position: absolute;
        right: 0;
        left: 0;
        bottom: -10rem;
        text-align: left;
        padding: 0.5rem;
        background: linear-gradient(rgba(0,0,0, 0.100), rgba(0,0,0, 0.80));
        transition: all 400ms ease-in-out;
    }

    :hover > img {
        transform: scale(1.3);
    }

    :hover > .disc {
        bottom: 0;
    }
`;
