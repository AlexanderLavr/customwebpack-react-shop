import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';
import Badge from '@material-ui/core/Badge';


import HeaderDrawer from './Drawer';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header(props) {
  const { countCart } = props;
  const classes = useStyles();
  const [drawer, openDrawer] = useState(false);

  const setDrawer = () => {
    openDrawer(false)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <HeaderDrawer open={drawer} setDrawer={setDrawer} {...props}/>
        <Toolbar>
          <IconButton 
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu"
            onClick={()=>openDrawer(true)}
          >
              <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            <Link to='/' className="mainLink">
                Test
              </Link>
          </Typography>
      

          <Link to='/cart' className="cartLink">
            <Button color="inherit">
              <Badge badgeContent={countCart} color="secondary" classes={{ anchorOriginTopRightRectangle: 'cartBage' }}>
                <AddShoppingCartIcon/>
              </Badge>
            </Button>
          </Link>

        </Toolbar>
      </AppBar>
    </div>
  );
}
