/* eslint-disable react/prop-types */
import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Button from '@material-ui/core/Button';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { makeStyles } from '@material-ui/core/styles';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuCate from './MenuCate.js';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    backgroundColor: '#f1ac5f',
  },
}));


export default function MenuPopupState(props) {
  const classes = useStyles();

  return (
      <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment >
          <FontAwesomeIcon size='2x' style={{position: 'fixed'}} icon={faBars} variant="contained" color="primary" {...bindTrigger(popupState)}/>
          
          <Menu {...bindMenu(popupState)}>
            <MenuItem  onClick={()=>{props.suggerer();popupState.close()}}>Suggestions</MenuItem>
            <MenuItem  onClick={()=>{props.popular2020();popupState.close()}}>Nouveauté</MenuItem>
            <MenuItem  onClick={()=>{props.bestRatedApi();popupState.close()}}>Les Mieux notés</MenuItem>
            <MenuItem  onClick={()=>{props.plateforms();popupState.close()}}>Plateformes</MenuItem>
            <MenuItem  onClick={()=>{props.publisher();popupState.close()}}>Dév</MenuItem>
            <MenuItem  onClick={()=>{props.store();popupState.close()}}>Boutiques</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
