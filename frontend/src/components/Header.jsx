import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

export default function Header({
    onBack = () => window.history.back(),
    pageTitle = "Tutke",
    userAvatarSrc = null,
    userName = "Helena",
    logoSrc = null,
}) {
  return (
    <AppBar position="static" color="primary" elevation={1} paddingTop="8px">
        <Toolbar>
            <IconButton edge="start" color="inherit" onClick={onBack} sx={{ mr: 2 }}>
                <ArrowBackIcon />
            </IconButton>
            {logoSrc && (
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
                    <img src={logoSrc} alt="Company Logo" style={{ height: 32 }} />
                </Box>
            )}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {pageTitle}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src={userAvatarSrc} alt={userName} />
            </Box>
        </Toolbar>
    </AppBar>
  );
}