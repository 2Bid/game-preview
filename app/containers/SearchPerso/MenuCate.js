import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto';

const useStyles = makeStyles({
  root: {
    color: '#ccc',
    backgroundColor: '#252525',
  },
  paper: {
    backgroundColor: '#252525',
    color: '#ddd',
    '&:hover': {
      background: '#252525',
    },
    opacity: {
      backgroundColor: 'rgba(25,25,25, 0.8)',
    },
  },
});

export default function FadeMenu(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  // eslint-disable-next-line react/prop-types
  const { actionAPI } = props;

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        style={{
          color: '#ccc',
          marginLeft: '8px',
          textTransform: 'capitalize',
          fontSize: '16px',
        }}
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Categories
      </Button>
      <Menu
        className={classes.paper}
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem className={classes.paper} onClick={handleClose}>
          FPS
        </MenuItem>
        <MenuItem className={classes.paper} onClick={handleClose}>
          Aventure
        </MenuItem>
        <MenuItem className={classes.paper} onClick={actionAPI}>
          Action
        </MenuItem>
        <MenuItem className={classes.paper} onClick={handleClose}>
          RPG
        </MenuItem>
        <MenuItem className={classes.paper} onClick={handleClose}>
          Stratégies
        </MenuItem>
        <MenuItem className={classes.paper} onClick={handleClose}>
          Shoot
        </MenuItem>
        <MenuItem className={classes.paper} onClick={handleClose}>
          Casual
        </MenuItem>
        <MenuItem className={classes.paper} onClick={handleClose}>
          Simulation
        </MenuItem>
        <MenuItem className={classes.paper} onClick={handleClose}>
          Puzzle
        </MenuItem>
        <MenuItem className={classes.paper} onClick={handleClose}>
          Arcade
        </MenuItem>
        <MenuItem className={classes.paper} onClick={handleClose}>
          Platformer
        </MenuItem>
        <MenuItem className={classes.paper} onClick={handleClose}>
          Racing
        </MenuItem>
        <MenuItem className={classes.paper} onClick={handleClose}>
          Sports
        </MenuItem>
        <MenuItem className={classes.paper} onClick={handleClose}>
          Multijoueur
        </MenuItem>
        <MenuItem className={classes.paper} onClick={handleClose}>
          Famille
        </MenuItem>
        <MenuItem className={classes.paper} onClick={handleClose}>
          Combat
        </MenuItem>
        <MenuItem className={classes.paper} onClick={handleClose}>
          Board Game
        </MenuItem>
        <MenuItem className={classes.paper} onClick={handleClose}>
          Educations
        </MenuItem>
        <MenuItem className={classes.paper} onClick={handleClose}>
          Cartes
        </MenuItem>
      </Menu>
    </div>
  );
}
