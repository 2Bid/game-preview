import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import JeuxCard from './JeuxCard';
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';


function JeuxGridList(props){
  let Array = props.perso;
  let halfwayThrough = Math.floor(Array.length / 2)

    return (
      <div style={{display: 'flex', justifyContent:'center', alignContent:'center' }}>
        <GridList cellHeight={350} style={{display:'flex', width:'50%', flexDirection:'column'}}>
          <div style={{width:'100%'}}>
            <GridListTile key="Subheader" style={{ height: 'auto'}} />
          {props.perso.slice(0,halfwayThrough).map(tile => (
            
              <GridListTile /* Carte style*/
              style={{
                display: 'flex',
                justifyContent: 'center',
                minWidth: '100px',
                marginBottom : '50px',
                width : '100%',
                height: '480px'
              }}
              key={tile.id}
              
            >
              <Fade left>
                <JeuxCard perso={tile} id={tile.id}/>
              </Fade>
              
            </GridListTile>
            
           
          ))}
          </div>
          
        </GridList>

        
        <GridList cellHeight={350} style={{display:'flex', width:'50%', flexDirection:'column'}}>
          <GridListTile key="Subheader" style={{ height: 'auto'}} />
          {props.perso.slice(halfwayThrough, props.perso.length).map(tile => (
            
              <GridListTile
              style={{
                display: 'flex',
                justifyContent: 'center',
                minWidth: '100px',
                marginBottom : '50px',
                width : '100%',
                height: '480px'
              }}
              key={tile.id}
              
            >
              <Fade right>
                <JeuxCard perso={tile} id={tile.id}/>
              </Fade>
              
            </GridListTile>
            
           
          ))}
          
        </GridList>

        <Button style={{ color: '#ccc' }} onClick={props.nextpage}>
          Page Suivante
        </Button>
      </div>
    );
  }
export default JeuxGridList;
