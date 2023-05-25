import React from "react";
import styles from "../styles/HomePage.module.css";
import Container from "@mui/material/Container";
import rockwellLogo from "../assets/images/rockwell.png";
import forkfarmsLogo from "../assets/images/ForkFarms.png";
import CSULogo from "../assets/images/CSU-logo.png";
import {Grid} from "@mui/material";


const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <div className={styles.header}>
                <Container maxWidth="md">
                    <div className={styles.titleContainer}>
                        <h1 className={styles.title}>Hydroponic System</h1>
                        <h3>Watch our system in action</h3>
                        <div className={styles.videoContainer}>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/5-RZWJoRj10?playlist=5-RZWJoRj10&autoplay=1&loop=1&start=2"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                playsinline
                            ></iframe>
                        </div>
                        <h2 className={styles.subtitle}>
                            Grow plants efficiently with our hydroponic system
                        </h2>
                    </div>
                </Container>
            </div>

            <hr/>

            <div className={styles.card}>
                <Container maxWidth="md">
                    <div className={styles.cardContent}>
                        <h2 className={styles.cardTitle}>About Our Project</h2>
                        <p className={styles.description}>
                            Cleveland State University's 2022-2023 Senior Design Project,
                            proudly sponsored by Rockwell Automation and Fork Farms, showcases
                            the collaborative efforts of students from various engineering
                            departments. This interdisciplinary initiative brings together
                            students from Mechanical Engineering, Electrical and Computer
                            Engineering, and Computer Science departments, working hand in hand
                            to achieve a common goal. The project's successful completion is
                            the result of the combined efforts of six dedicated students, two
                            representatives from each department, who embody the spirit of
                            collaboration and the pursuit of excellence that defines Cleveland
                            State University's engineering programs.
                        </p>
                    </div>
                </Container>
            </div>

            <hr/>

            <div className={styles.card}>
                <Container maxWidth="md">
                    <div className={styles.cardContent}>
                        <h2 className={styles.cardTitle}>Data Transfer & IoT Integration</h2>
                        <p className={styles.description}>
                            Our web application is designed to facilitate smooth data transfers to any selected IoT platform, enabling data access and engagement through mobile apps or cloud-based web applications. Taking advantage of IoT protocols like MQTT and conventional APIs, our devices are capable of integrating with a range of open platforms for data analysis and response to incoming data. This enables flexibility and customization to cater to your unique requirements.                        </p>

                        {
                        }

                    </div>
                </Container>


            </div>

            <hr/>

            <div className={styles.newSection}>
                <Container maxWidth="md">
                    <h2 className={styles.newSectionTitle}></h2>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <div className={styles.newSectionContentLeft}>
                                <h3 className={styles.containerTitle}>Advance IOT
                                    Cloud Platform</h3>
                                <p>Data from Sensors can be send to any Cloud IOT Applications via API/MQTT Protocols.</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className={styles.newSectionContentRight}>
                                <h3 className={styles.containerTitle}>Mobile and Web
                                    Enable Control</h3>
                                <p>Data and configuration can be accessible via Mobile and web Enable application. </p>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>

            <hr/>

            <div className={styles.sponsors} style={{ marginTop: "2rem" }}>
                <Container maxWidth="md">
                    <h2 className={styles.sponsorsTitle}>Our Sponsors</h2>
                    <div className={styles.sponsorLogos}>
                        <img
                            src={forkfarmsLogo}
                            alt="Fork Farms Logo"
                            className={styles.sponsorLogo}
                        />
                        <img
                            src={CSULogo}
                            alt="CSU Logo"
                            className={styles.sponsorLogo}
                        />
                        <img
                            src={rockwellLogo}
                            alt="Rockwell Automation Logo"
                            className={styles.sponsorLogo}
                        />
                    </div>
                </Container>
            </div>
            <div className={styles.footer}>
                <Container maxWidth="md">
                    <p className={styles.footerText}>
                    </p>
                </Container>
            </div>
        </div>
    );
};

export default HomePage;



