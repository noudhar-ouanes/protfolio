import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';

let clients = [
    {
        name : "Yanis Mrad",
        img_url : "/yanisMradImg.jpg",
        stars : 5,
        disc : `Pendant onze années, M. Nijed Wannes a été bien plus que mon professeur de piano : il a été le catalyseur de ma passion pour la musique. Il est mon tout premier professeur, et dès les premières leçons, il a su dénicher et cultiver en moi un amour profond et sincère pour cet art.
        ​M. Nijed m'a appris à ne pas seulement jouer des notes, mais à exprimer, ressentir et transmettre la musique avec toute mon âme. Grâce à son enseignement dévoué, j'ai pu explorer ma passion jusqu'à ses plus belles réussites, notamment en remportant le Concours National de Piano "Les Solistes" à Tunis et plusieurs autres prix.
        ​Ce qui rend cette période unique, c'est qu'au fil des ans, la relation stricte de professeur à élève s'est progressivement effacée pour laisser place à une profonde relation d'amitié, voire de fraternité. Ce lien privilégié a rendu chaque leçon inoubliable.
        ​Aujourd'hui, cet héritage continue. L'impact de M. Nijed va au-delà de mes performances : il m'a transmis sa passion pour l'enseignement. Je suis à mon tour professeur de piano auprès des plus jeunes, et j'essaie chaque jour de lui ressembler et d'insuffler à mes élèves la même étincelle qu'il a allumée en moi.
        ​Je ne saurais trop le remercier pour cette transmission inestimable, tant sur le plan musical qu'humain.`
    },
   
    {
        name : "Yosr Kalboussi",
        img_url : "/yosr.jpg",
        stars : 5,
        disc : `A mon cher professeur mr Nijed, merci d’avoir su me motiver au fil des années et de m’avoir tant appris. 
        Votre patience et votre bonne humeur m’a toujours encouragé à me surpasser. J’ai non seulement trouvé en vous un professeur formidable mais aussi un mentor  sur qui j’ai toujours pu compter. Vous avez su m’instruire les bases et les techniques mais plus encore vous m’avez appris à ressentir les morceaux au fil du temps. J’ai toujours tant admiré votre passion pour la musique et c’est grâce à vous qu’aujourd’hui encore j’essaie toujours de transmettre des émotions en jouant du piano à travers ma propre interprétation. 
        Merci monsieur Nijed de m’avoir fait découvrir la magie du piano .Vous êtes le meilleur !`
    }, 
    {
        name : "Fares Mhamdi",
        img_url : "/fares.jpg",
        stars : 5,
        disc : `Cher professeur Nijed,
        je tiens à vous exprimer toute ma gratitude et mes remerciements. Vous avez été le premier à m’accompagner dans mon parcours avec le piano, et grâce à vous j’ai appris beaucoup de choses précieuses que je garde encore aujourd’hui. Grâce à vous je suis devenu un professeur de piano à mon tour. Je n’oublierai jamais votre soutien, votre patience et vos encouragements. Vous avez été plus qu’un simple professeur, mais une véritable source d’inspiration. Je vous souhaite beaucoup de réussite et de bonheur au Canada, et j’espère avoir l’occasion de vous revoir un jour pour vous remercier en personne.`
    },
    
    
    
   
]
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}

const Clients = () => {
    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = clients.map((item, i) => (
        <ClientSlider item={item} key={i}/>
    ))
  return (
    <Container id='client'>
        <Slide direction="left">
            <h1 className="green">Témoignages</h1>
        </Slide>
        <Testimonials>
            <Slider ref={arrowRef} {...settings}>
                {clientDisc}
            </Slider>
            <Buttons>
                <button
                onClick={() => arrowRef.current.slickPrev()}
                ><IoIosArrowBack/></button>
                <button
                onClick={() => arrowRef.current.slickNext()}
                ><IoIosArrowForward/></button>
            </Buttons>
        </Testimonials>
    </Container>
  )
}

export default Clients

const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }


    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #01be96;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #01be96;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`