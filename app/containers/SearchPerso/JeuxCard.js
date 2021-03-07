import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
import './JeuxCard.css'

 

class JeuxCard extends Component {
  constructor(props){
    super(props);
    this.state={
      jeu : ''
    }

  }



  render() {
    const {id, cardDetailAPI} = this.props;
    return (
      <Card className={'root'}>
        <div className={'card'}>
        <Link
          style={{ textDecoration: 'none' }}
          to={{pathname:`/CardDetail/${this.props.perso.slug}`,
        
          state: {
            jeuDetail : id ,
          }}}
        >
          <CardActionArea >              
            <CardMedia
              className={'media'}
              image={this.props.perso.background_image || this.props.perso.image_background}
              title={this.props.perso.name}
            />
            <CardContent>
              <Typography
                className={'content'}
                gutterBottom
                variant="h6"
                component="h3"
              >
                {this.props.perso.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" style={{color :'black', float :'right'}} component="p">
                {this.props.perso.released}
              </Typography>
              <Typography variant="body2" color="textSecondary" style={{color :'black', float :'left'}} component="div">
              { !this.props.perso.genres ? <p></p>
               : this.props.perso.genres[2] ?
                    this.props.perso.genres[0].name + ' ' + this.props.perso.genres[1].name + ' ' + this.props.perso.genres[2].name 
                : this.props.perso.genres[1] ? 
                    this.props.perso.genres[0].name + ' ' + this.props.perso.genres[1].name
                : this.props.perso.genres[0] ? 
                    this.props.perso.genres[0].name 
                  : <p></p> }
              </Typography>
              <br/>
              <Typography variant="body2" color="textSecondary" style={{color :'black', marginTop:'15px' }} component="div">
              { !this.props.perso.platforms ? <p></p>
              : this.props.perso.platforms[2] ? 
                    this.props.perso.platforms[0].platform.name + ' | ' + this.props.perso.platforms[1].platform.name + ' | ' + this.props.perso.platforms[2].platform.name 
                : this.props.perso.platforms[1] ? 
                    this.props.perso.platforms[0].platform.name + ' | ' + this.props.perso.platforms[1].platform.name
                : this.props.perso.platforms[0] ? 
                    this.props.perso.platforms[0].platform.name 
                  : <p></p> }
              </Typography>
            </CardContent>
          </CardActionArea>
          {/* <CardActions>
          <Button size="small" color="primary">
            Details
          </Button>
        </CardActions> */}
        </Link>
        </div>
      </Card>
    );
  }
}

export default JeuxCard