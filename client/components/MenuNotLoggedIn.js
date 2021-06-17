import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenuNotLoggedIn() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Menu Icon
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className="button-link">
          <Link to="/home">
            <MenuItem onClick={handleClose}>HOME</MenuItem>
          </Link>
          <Link to="/furniture">
            <MenuItem onClick={handleClose}>ALL PRODUCTS</MenuItem>
          </Link>
          <Link to="about">
            <MenuItem onClick={handleClose}>ABOUT US</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem onClick={handleClose}>SIGN IN</MenuItem>
          </Link>
          <Link to="/signup">
            <MenuItem onClick={handleClose}>SIGN UP</MenuItem>
          </Link>
        </div>
      </Menu>
    </div>
  );
}
