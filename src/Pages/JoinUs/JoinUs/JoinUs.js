import * as React from 'react';
import "./JoinUs.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


import JoinUsHome from './../JoinUsHome/JoinUsHome';

import useAuth from './../../../Components/Hooks/useAuth';


import Home from './../../Home/Home';
import { Button } from 'react-bootstrap';


const drawerWidth = 240;

function JoinUs(props) {
  let { path, url } = useRouteMatch();
  const {admin,logout}=useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />

      
      <Divider />
      <div><Link to={`${url}`}><Button className="Joinbtn" variant="inherit">Join As a Learner</Button></Link></div>
      <div><Link to={`${url}`}><Button className="Joinbtn" variant="inherit">Join As a Rider</Button></Link></div>
     {/* {!admin &&
     <Box>
        <div><Link to={`${url}/myOrder`}><Button variant="inherit">MyOrder</Button></Link></div>
     <div> <Link to={`${url}/payment`}><Button variant="inherit">Payment</Button></Link></div>
      <div><Link to={`${url}/review`}><Button variant="inherit">Review</Button></Link></div>
      
     </Box>
     }
      {admin && 
      <Box>
        <div><Link to={`${url}/manageOrder`}><Button variant="inherit">Manage Order</Button></Link></div>
        <div><Link to={`${url}/manageProduct`}><Button variant="inherit">Manage Product</Button></Link></div>
        <div><Link to={`${url}/makeadmin`}><Button variant="inherit">Make Admin</Button></Link></div>

      </Box>
      } */}
     <Link to='/home'><Button className="Joinbtn" variant="inherit">Go to Home page</Button></Link>
     <Button className="Joinbtn" variant="inherit" onClick={logout}>Logout</Button>
     
      
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography className="bar" variant="h6" noWrap component="div">
            JoinUs
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
          <JoinUsHome></JoinUsHome>
       </Route>
          {/*<Route path={`${path}/myOrder`}>
          <MyOrders></MyOrders>
          
        </Route>
        <Route path={`${path}/review`}>
          <AddReviews></AddReviews>
          
        </Route>
        <Route path={`${path}/payment/:id`}>
          <Payment></Payment>
          
        </Route>
        <Route path={`${path}/makeadmin`}>
          <Makeadmin></Makeadmin>
          
        </Route>
        
        <Route path={`${path}/manageOrder`}>
          <ManageOrder></ManageOrder>
          
        </Route>
        
        
        <Route path={`${path}/manageProduct`}>
          <ManageProducts></ManageProducts>
          
        </Route> */}
      </Switch>
      
      </Box>
    </Box>
  );
}

JoinUs.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default JoinUs;
