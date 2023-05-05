import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import alertIcon from '../assets/icons/alert.png';
import alertIconActive from '../assets/icons/alert-active.png'; // Make sure to import the active icon
import chartsIcon from '../assets/icons/charts.png';
import progressIcon from '../assets/icons/progress.png';
import dataIcon from '../assets/icons/data-icon.png';

const drawerWidth = 64;

const Sidebar = () => {
    const [hasActiveAlert, setHasActiveAlert] = useState(false);

    // const handleAlertStatusChange = (isActive) => {
    //     setHasActiveAlert(isActive);
    // };

    const navItems = [
        { name: 'Alerts', path: '/', icon: hasActiveAlert ? alertIconActive : alertIcon },
        { name: 'Charts', path: '/charts', icon: chartsIcon },
        { name: 'Progress', path: '/progress', icon: progressIcon },
        { name: 'Data', path: '/data-icon', icon: dataIcon },
    ];
    // const handleAlertStatusChange = (isActive) => {
    //     setHasActiveAlert(isActive);
    // };

    return (
        <Drawer
            variant="permanent"
            sx={{
                width:drawerWidth,
                maxWidth: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    maxWidth: drawerWidth,

                    boxSizing: 'border-box',
                    position: 'fixed',

                    top: '66px',
                },
            }}
        >
            <List>
                {navItems.map((item) => (
                    <ListItem button key={item.name}>
                        <ListItemIcon>
                            <img src={item.icon} alt={item.name} height="24" />
                        </ListItemIcon>
                        <ListItemText primary={item.name} />
                    </ListItem>
                ))}
            </List>
            <ListItem button key="Alerts">
                <ListItemIcon>
                    <img src={hasActiveAlert ? alertIconActive : alertIcon} alt="Alerts" height="24" />
                </ListItemIcon>
                <ListItemText primary="Alerts" />
            </ListItem>

        </Drawer>
    );
};

export default Sidebar;
