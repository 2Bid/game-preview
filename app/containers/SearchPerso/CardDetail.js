import React from 'react';
import CardDetailInfo from './CardDetailInfo';

export default class CardDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      jeuInfo : '',
    };
  
  }

  cardDetailAPI = () => {
    fetch(`https://api.rawg.io/api/games/${this.props.location.state.jeuDetail}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
      this.setState({
        jeuInfo : response
      })
    })
    .catch(err => { console.log(err); 
    });}

  componentDidMount() {
    this.cardDetailAPI()
  }
   
  render() {
    const jeu = Object.values(this.state.jeuInfo)
    return(
      <div style={{width:'100%'}}>
         {jeu.slice(0,1).map(i => (
           <CardDetailInfo jeuInfo={this.state.jeuInfo}
           key={i}
           />
         )
         )}
      </div>
    )
    
  }
}