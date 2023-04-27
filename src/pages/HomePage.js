import React from "react";
import styles from "../styles/HomePage.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <Container maxWidth="md">
                <Paper className={styles.titleContainer} elevation={3}>
                    <Typography variant="h3" component="h3" className={styles.title}>
                        Hydroponic Monitoring System
                    </Typography>

                    <div className={styles.videoContainer}>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/6udSInwofSU?autoplay=1&loop=1&playlist=6udSInwofSU&mute=1&playsinline=1"
                            title="video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            playsInline
                        ></iframe>
                    </div>
                    <Typography
                        variant="subtitle1"
                        component="h2"
                        className={styles.subtitle}
                    >
                        Grow plants efficiently
                    </Typography>
                </Paper>
                <Card className={styles.card}>
                    <CardContent>
                        <Typography
                            variant="h4"
                            component="h2"
                            gutterBottom
                            className={styles.cardTitle}
                        >
                            About Our Project
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            className={styles.description}
                        >
                            The Hydroponic Monitoring System is designed to help you monitor and manage your
                            hydroponic systems with ease. Track your plants' growth, optimize
                            nutrient levels, and ensure the ideal environment for your plants
                            to thrive.
                        </Typography>
                    </CardContent>

                </Card>
            </Container>
        </div>
    );
};

export default HomePage;
