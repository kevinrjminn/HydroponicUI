import React from 'react';
import styles from '../styles/AwardPage.module.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import awardImage from '../assets/images/award.jpg';

const AwardPage = () => {
    return (
        <div className={styles.awardPage}>
            <Container maxWidth="md">
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>Senior Design Award Winners</h1>
                    <h3>Second Place - Cleveland State University</h3>
                </div>

                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <img
                            src={awardImage}
                            alt="Award Ceremony"
                            className={styles.awardImage}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <div className={styles.awardContent}>
                            <p>
                                We are proud to announce that our team has won second place in
                                the Cleveland State University Senior Design competition. This
                                prestigious event showcases the innovative and collaborative
                                efforts of students from various engineering departments,
                                working together to solve real-world problems and create
                                impactful projects.
                            </p>
                            <p>
                                Our project, the Hydroponic System, is a testament to our
                                team's dedication, hard work, and passion for engineering
                                excellence. We are grateful for the support and guidance from
                                our professors, sponsors, and fellow students who have helped
                                us achieve this remarkable milestone.
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default AwardPage;
