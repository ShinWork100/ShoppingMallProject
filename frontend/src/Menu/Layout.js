import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/system';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Header from '../MainPage/Header';

const SidebarWrapper = styled(Drawer)(({ theme }) => ({
  width: 240,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 240,
  },
}));

const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

const menuItems = [
  { label: 'Home', path: '/', icon: <HomeIcon /> },
  { label: 'New Post', path: '/new-post', icon: <AddCircleIcon /> },
  // add more menu items here...
];

function Layout({ children }) {
  return (
    <div>
        <Header/>
      <SidebarWrapper variant="permanent">
        <Toolbar />
        <div>
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.label} component={RouterLink} to={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </div>
      </SidebarWrapper>
      <ContentWrapper>
        <Toolbar />
        {children}
      </ContentWrapper>
    </div>
  );
}

export default Layout;
