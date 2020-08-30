import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Events.scss";
import image1 from "../../../src/Assets/image/event1/1.jpg";
import image2 from "../../../src/Assets/image/event1/2.jpg";
import image3 from "../../../src/Assets/image/event1/3.jpg";
import image4 from "../../../src/Assets/image/event1/4.jpg";
import image5 from "../../../src/Assets/image/event1/5.jpg";
import image6 from "../../../src/Assets/image/event1/6.jpg";
import image7 from "../../../src/Assets/image/event1/7.jpg";
import image8 from "../../../src/Assets/image/event1/8.jpg";
import image9 from "../../../src/Assets/image/event1/9.jpg";
import image10 from "../../../src/Assets/image/event1/10.jpg";
import image11 from "../../../src/Assets/image/event1/11.jpg";
import image12 from "../../../src/Assets/image/event1/12.jpg";
import image13 from "../../../src/Assets/image/event1/13.jpg";
import image14 from "../../../src/Assets/image/event1/14.jpg";
import image15 from "../../../src/Assets/image/event1/15.jpg";



import event2img1 from "../../../src/Assets/image/event2/Picture1.jpg";
import event2img2 from "../../../src/Assets/image/event2/Picture2.jpg";
import event2img3 from "../../../src/Assets/image/event2/Picture3.jpg";
import event2img4 from "../../../src/Assets/image/event2/Picture4.jpg";
import event2img5 from "../../../src/Assets/image/event2/Picture5.jpg";


import event3img1 from "../../../src/Assets/image/event3/clean1.png";
import event3img2 from "../../../src/Assets/image/event3/clean2.png";
import event3img3 from "../../../src/Assets/image/event3/clean3.png";
import event3img4 from "../../../src/Assets/image/event3/clean4.png";


import event4img1 from "../../../src/Assets/image/event4/Picture1.png";
import event4img2 from "../../../src/Assets/image/event4/Picture2.png";
import event4img3 from "../../../src/Assets/image/event4/Picture3.png";
import event4img4 from "../../../src/Assets/image/event4/Picture4.png";
import event4img5 from "../../../src/Assets/image/event4/Picture5.png";
import event4img6 from "../../../src/Assets/image/event4/Picture6.png";
import event4img7 from "../../../src/Assets/image/event4/Picture7.png";
import event4img8 from "../../../src/Assets/image/event4/Picture8.png";
import event4img9 from "../../../src/Assets/image/event4/Picture9.png";
import event4img10 from "../../../src/Assets/image/event4/Picture10.png";
import event4img11 from "../../../src/Assets/image/event4/Picture11.png";


import event5img1 from "../../../src/Assets/image/event5/Picture1.png";
import event5img2 from "../../../src/Assets/image/event5/Picture2.png";
import event5img3 from "../../../src/Assets/image/event5/Picture3.png";


import event6img1 from "../../../src/Assets/image/event6/Picture2.jpg";
import event6img2 from "../../../src/Assets/image/event6/Picture3.jpg";
import event6img3 from "../../../src/Assets/image/event6/Picture4.jpg";
import event6img4 from "../../../src/Assets/image/event6/Picture5.jpg";



import event7img1 from "../../../src/Assets/image/event7/1.jpg";
import event7img2 from "../../../src/Assets/image/event7/2.jpg";
import event7img3 from "../../../src/Assets/image/event7/3.jpg";
import event7img4 from "../../../src/Assets/image/event7/4.jpg";
import event7img5 from "../../../src/Assets/image/event7/5.jpg";
import event7img6 from "../../../src/Assets/image/event7/6.jpg";
import event7img7 from "../../../src/Assets/image/event7/7.jpg";
import event7img8 from "../../../src/Assets/image/event7/8.jpg";
import event7img9 from "../../../src/Assets/image/event7/9.jpg";
import event7img10 from "../../../src/Assets/image/event7/10.jpg";
import event7img11 from "../../../src/Assets/image/event7/11.jpg";
import event7img12 from "../../../src/Assets/image/event7/12.jpg";
import event7img13 from "../../../src/Assets/image/event7/13.jpg";


import event8img1 from "../../../src/Assets/image/8/E10-1.jpg";
import event8img2 from "../../../src/Assets/image/8/E10-2.jpg";
import event8img3 from "../../../src/Assets/image/8/E10-3.jpg";
import event8img4 from "../../../src/Assets/image/8/E10-4.jpg";


import event9img1 from "../../../src/Assets/image/9/E11-1.jpg";
import event9img2 from "../../../src/Assets/image/9/E11-2.jpg";
import event9img3 from "../../../src/Assets/image/9/E11-3.jpg";


import event10img1 from "../../../src/Assets/image/10/12-1.jpg";
import event10img2 from "../../../src/Assets/image/10/12-2.jpg";
import event10img3 from "../../../src/Assets/image/10/12-3.jpg";
import event10img4 from "../../../src/Assets/image/10/12-4.jpg";
import event10img5 from "../../../src/Assets/image/10/12-5.jpg";
import event10img6 from "../../../src/Assets/image/10/12-6.jpg";
import event10img7 from "../../../src/Assets/image/10/12-7.jpg";
import event10img8 from "../../../src/Assets/image/10/12-8.jpg";
import event10img9 from "../../../src/Assets/image/10/12-9.jpg";


import event11img1 from "../../../src/Assets/image/13/13-1.jpg";
import event11img2 from "../../../src/Assets/image/13/13-2.jpg";
import event11img3 from "../../../src/Assets/image/13/13-3.jpg";

import event12img1 from "../../../src/Assets/image/16/14-1.jpg";
import event12img3 from "../../../src/Assets/image/16/14-3.jpg";

class Events extends React.Component {
  
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1
          };

          var settings2 = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
          };

          var settings3 = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1
          };

          var settings4 = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
          };

        return (
            <Container fluid className="Events">
                <Row className="event">
                    <Col>
                        <h1>Health and Education Awarness</h1>
                        <ul>
                            <li>Members of team CEWA reached 100+ families in Gonda district for the awareness regarding the importance of education in a child's life especially a girl child.
                                    </li>
                            <li>Along with education they informed them about the importance of health and hygiene followed by their relation with surroundings.
                                    </li>
                        </ul>
                    </Col>
                </Row>
                <Slider {...settings4} className="slider">
                    <img src={image1}></img>
                    <img src={image2}></img>
                    <img src={image3}></img>
                    <img src={image4}></img>
                    <img src={image5}></img>
                    <img src={image6}></img>
                    <img src={image7}></img>
                    <img src={image8}></img>
                    <img src={image9}></img>
                    <img src={image10}></img>
                    <img src={image11}></img>
                    <img src={image12}></img>
                    <img src={image13}></img>
                    <img src={image14}></img>
                    <img src={image15}></img>
                </Slider>


                <Row className="event">
                    <h1>Ek Kadam Swacchta Ki Or</h1>
                    <ul>
                        <li>Team CEWA took a session over the importance and necessity of not using plastic bags and on all little steps which are necessary to keep their surrounding clean. 
                            </li>
                        <li>Different competitions like Quiz were organized by them and winners were awarded with prizes.
                            </li>
                    </ul>
                </Row>
                <Slider {...settings3} className="slider">
                    <img src={event2img1}></img>
                    <img src={event2img3}></img>
                    
                </Slider>


                <Row className="event">
                    <h1>Jann- Jann Ka Naara hai, Bharat ko swachh banana hai!</h1>
                    <ul>
                        <li>Cleanliness drives were conducted in certain schools by CEWA members in order to fulfill the mission “Clean India, Green India”.
                            </li>
                        <li>Students were also taught about the importance of cleanliness in day to day life.</li>
                    </ul>
                </Row>
                <Slider {...settings2} className="slider">
                    <img src={event3img1}></img>
                    <img src={event3img2}></img>
                    <img src={event3img3}></img>
                    <img src={event3img4}></img>
                </Slider>


                <Row className="event">
                    <h1>Cleanliness Drive Rally</h1>
                    <ul>
                        <li>Rallies were organized for the awareness of the villagers in and around different villages regarding the ill effects of open defecation and unhygienic environment</li>
                    </ul>
                </Row>
                <Slider {...settings2} className="slider">
                    <img src={event4img1}></img>
                    <img src={event4img2}></img>
                    <img src={event4img3}></img>
                    <img src={event4img4}></img>
                    <img src={event4img5}></img>
                    <img src={event4img6}></img>
                    <img src={event4img7}></img>
                    <img src={event4img8}></img>
                    <img src={event4img9}></img>
                    <img src={event4img10}></img>
                </Slider>


                <Row className="event">
                    <h1>Activities- Quiz, Divide & Clean</h1>
                    <ul>
                        <li>Different intereactive sessions and events with the students were organized in which headmasters and teachers were also involved.</li>
                        <li>Prizes were distributed for the appreciation of kids and to the winners.</li>
                    </ul>
                </Row>
                <Slider {...settings4} className="slider">
                    <img src={event5img1}></img>
                    <img src={event5img2}></img>
                    <img src={event5img3}></img>
                </Slider>


                <Row className="event">
                    <h1>Food Distribution - 1</h1>
                    <ul>
                        <li>Distribution of food packets took place in Bishrath, Noida and was headed by CEWA coordinator Mr. Mukesh Pratap Singh & his team.</li>
                        <li>It was a mega food distribution one day event where protocols of social distancing were followed as per the government guidelines.</li>
                    </ul>
                </Row>
                <Slider {...settings4} className="slider">
                    <img src={event6img1}></img>
                    <img src={event6img2}></img>
                    <img src={event6img3}></img>
                    <img src={event6img4}></img>
                </Slider>


                <Row className="event">
                    <h1>Food Distribution - 2</h1>
                    <ul>
                        <li>A 3 day event headed by our founder Mr. Prakhar Pratap Singh which involved distribution of food packets simultaneously maintaining social distancing as per government guidelines.</li>
                        <li>They were informed about the use of paper bags instead of polythenes.</li>
                    </ul>
                </Row>
                <Slider {...settings2} className="slider">
                    <img src={event7img1}></img>
                    <img src={event7img2}></img>
                    <img src={event7img3}></img>
                    <img src={event7img4}></img>
                    <img src={event7img5}></img>
                    <img src={event7img6}></img>
                    <img src={event7img7}></img>
                    <img src={event7img8}></img>
                    <img src={event7img9}></img>
                    <img src={event7img10}></img>
                    <img src={event7img11}></img>
                    <img src={event7img12}></img>
                    <img src={event7img13}></img>
                </Slider>


                <Row className="event">
                    <h1>Food Distribution - 3</h1>
                    <ul>
                        <li>Distribution of food packets and masks took place in Allahabad, Uttar Pradesh and was headed by CEWA member Kartikay Singh & his team.</li>
                    </ul>
                </Row>
                <Slider {...settings4} className="slider">
                    <img src={event8img1}></img>
                    <img src={event8img2}></img>
                    <img src={event8img3}></img>
                    <img src={event8img4}></img>
                </Slider>


                <Row className="event">
                    <h1>Food Distribution - 4</h1>
                    <ul>
                        <li>Food packets containing some nutritious elements were distributed in Lakhimpur Kheri district of Uttar Pradesh.</li>
                        <li>Event was headed by CEWA member Harsh Gupta and his team in which there was no use of plastic bags.</li>
                    </ul>
                </Row>
                <Slider {...settings4} className="slider">
                    <img src={event9img1}></img>
                    <img src={event9img2}></img>
                    <img src={event9img3}></img>
                </Slider>



                <Row className="event">
                    <h1>Stationary Distribution</h1>
                    <ul>
                        <li>On the occasion of World Day Against Child Labour, distribution of learning kit to underprivileged children was done by member of CEWA Naimish along with his team.</li>
                        <li>The event took place in Lucknow, Uttar Pradesh.</li>
                    </ul>
                </Row>
                <Slider {...settings} className="slider">
                    <img src={event10img1}></img>
                    <img src={event10img2}></img>
                    <img src={event10img3}></img>
                    <img src={event10img4}></img>
                    <img src={event10img5}></img>
                    <img src={event10img6}></img>
                    <img src={event10img7}></img>
                    <img src={event10img8}></img>
                    <img src={event10img9}></img>
                </Slider>


                <Row className="event">
                    <h1>Sanitizer Distribution</h1>
                    <ul>
                        <li>Our team member Kanishka Sharma headed along with her team and distributed sanitizers to the needy one's at different places in South Delhi</li>
                    </ul>
                </Row>
                <Slider {...settings4} className="slider">
                    <img src={event11img1}></img>
                    <img src={event11img2}></img>
                    <img src={event11img3}></img>
                </Slider>


                <Row className="event">
                    <h1 style={{width: '100%'}}>Plantation Drive</h1>
                    <ul>
                        <li>CEWA members planted trees in different parts of Greater Noida and Delhi.</li>
                        <li>It is the initiative taken by CEWA Foundation on the occasion of World Environment Day.</li>
                    </ul>
                </Row>
                <Slider {...settings3} className="slider">
                    <img src={event12img1}></img>
                    <img src={event12img3}></img>
                </Slider>
            </Container>


        );
    }
}

export default Events;