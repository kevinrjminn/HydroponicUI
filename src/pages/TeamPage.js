import React from 'react';
import './TeamPage.css';
import leulImage from '../assets/images/leul.jpg';
import kevinImage from '../assets/images/kevin.jpg';
import shakeebImage from '../assets/images/shakeeb.png';
import ianImage from '../assets/images/Ien.png';
import andrewImage from '../assets/images/andrew.png';
import brianImage from '../assets/images/brian.jpg';
import backgroundImage from '../assets/images/background.jpg';

const TeamPage = () => {
    return (
        <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="dimmed">
            <div className="teamInfoPage">
                <div className="container">
                    <div className="titleContainer">
                        <h1 className="title">Senior Design Team</h1>

                    </div>
                    {/* Computer Science section */}

                    <div className="section-container">
                        <br/>
                        <h4 className="section-title">Computer Science</h4>

                        <div className="cs-vertical-line"></div>
                        <div className="cs-members">
                            {/* Add team member photos and names here */}
                            <div className="team-member">
                                <img src={leulImage} alt="Member 1" className="cs-member-photo"/>
                                <p className="cs-member-name">Leul Mezgebe</p>
                            </div>
                            <div className="team-member">
                                <img src={kevinImage} alt="Member 2" className="cs-member-photo"/>
                                <p className="cs-member-name">Kevin Minn</p>
                            </div>
                            <div className="cs-section">
                                <div className="cs-contribution">
                                    <p>
                                        The computer science team at Cleveland State University's 2022-2023 Senior Design Project focused on creating a web app for remote monitoring of live hydroponic data, specifically obtaining data from the Micro800 PLC. They employed React, JavaScript, CSS, JSX, and HTML Bootstrap to build an intuitive and user-friendly front end. The team used Node.js for backend development and MongoDB for cloud storage, ensuring smooth communication between Rockwell Automation's Connected Component Workbench software system and the cloud database server.
                                        To guarantee accurate data transmission, reception, and retrieval, the team utilized the MQTT protocol to connect the Micro800 PLC to the OAS software for data logging. The resulting web app showcases a comprehensive full-stack web page with a strong emphasis on UI/UX design, API protocols, and seamless functionality. In addition to this, the team also contributed to the design and creation of the Senior Design project webpage, demonstrating their commitment to excellence in the field.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Computer Engineering section */}
                    <div className="section-container">
                        <h4 className="section-title">Computer Engineering</h4>

                        <div className="ce-section">
                            <div className="ce-members">
                                {/* Add team member photos and names here */}
                                <div className="team-member">
                                    <img src={shakeebImage} alt="Member 3" className="ce-member-photo"/>
                                    <p className="ce-member-name">Shakeeb Rahman <br/> Team Leader</p>
                                </div>
                                <div className="team-member">
                                    <img src={ianImage} alt="Member 4" className="ce-member-photo"/>
                                    <p className="ce-member-name">Ian Henning</p>
                                </div>
                            </div>
                            <div className="ce-vertical-line"></div>
                            <div className="ce-contribution">
                                <p>
                                    The team responsible for computer engineering worked on programming the Micro800 PLC processor, automating the sensors and pumps for the flex farm, and wiring all electrical circuits. They utilized Rockwell Automation's Connected Component Workbench (CCW) software and communication protocols to program the Micro800 PLC unit, configuring the microcontrollers, sensors, and actuators within the hydroponic system. Under the leadership of Shakeep Raham, the team effectively managed every aspect of the project and ensured timely execution of tasks, resulting in the successful completion of the project.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="section-container">
                        <h4 className="section-title">Mechanical Engineering</h4>

                        <div className="me-members">
                            <div className="team-member">
                                <img src={andrewImage} alt="Member 5" className="me-member-photo"/>
                                <p className="me-member-name">Andrew</p>
                            </div>
                            <div className="team-member">
                                <img src={brianImage} alt="Member 6" className="me-member-photo"/>
                                <p className="me-member-name">Brian</p>
                            </div>
                        </div>
                        <div className="me-section">
                            <div className="me-contribution">
                                <p>
                                    The mechanical engineering team was responsible for designing a mechanical lever device that could fit within the Flex Farm to install the pumps and sensors used for both the Flex Farm and Rockwell PLC Micro800. They carefully selected appropriate materials and conducted stress and fluid dynamic analyses to ensure optimal performance of the system. The team worked in close collaboration with the computer engineering and computer science teams to seamlessly integrate the hardware and software components into the system, resulting in a fully functional hydroponic system.
                                </p>
                            </div>
                            <div className="me-vertical-line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};
export default TeamPage;
