import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AlertIcon from '@mui/icons-material/NotificationsActive';
import BarChartIcon from '@mui/icons-material/BarChart';
import PlantProgressIcon from '@mui/icons-material/Nature';
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        top: 'auto',
    },
}));

const ResponsiveSidebar = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <List>
                <ListItem button onClick={() => scrollToSection('alert-section')}>
                    <ListItemIcon>
                        <AlertIcon />
                    </ListItemIcon>
                    <ListItemText primary="Alerts" />
                </ListItem>
                <ListItem button onClick={() => scrollToSection('bar-chart-section')}>
                    <ListItemIcon>
                        <BarChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Bar Chart" />
                </ListItem>
                <ListItem button onClick={() => scrollToSection('plant-progress-section')}>
                    <ListItemIcon>
                        <PlantProgressIcon />
                    </ListItemIcon>
                    <ListItemText primary="Plant Progress" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default ResponsiveSidebar;
