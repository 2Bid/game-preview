/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import PersoTable from './Table';
import JeuxCard from './JeuxCard';
import JeuxGridList from './JeuxGridList';
import CardDetail from './CardDetail';
// eslint-disable-next-line import/extensions
import MenuListComposition from './Menu.js';
import Fade from 'react-reveal/Fade';

const init = {
  method: 'GET',
  mode: 'cors',
};

export default class SearchPerso extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtertext: '',
      checked: true,
      perso: [],
      page: '1',
      key: ''
    };
  }

  actionAPI = () => {
    fetch(`https://api.rawg.io/api/genres/adventure?key=57ac9aae572f436a9dc75121ea1bb779`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(json => {
        const data = json;
        // eslint-disable-next-line no-console
        console.log(data);
        this.setState({
          perso: data.results,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  inputAPI = () => {
    fetch(
      `https://rawg.io/api/games?page_size=20&search=${
        this.state.filtertext
      }&page=1&?key=57ac9aae572f436a9dc75121ea1bb779`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(json => {
        const data = json;
        console.log(data);
        this.setState({
          perso: data.results,
          filtertext: '',
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  callAPI = () => {
    fetch(`https://api.rawg.io/api/games?page=${this.state.page}&?key=57ac9aae572f436a9dc75121ea1bb779`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(json => {
        const data = json;
        this.setState({
          perso: data.results,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  bestRatedApi = () => {
    fetch(
      `https://api.rawg.io/api/games?dates=2001-01-01,2001-12-31&ordering=-rating?key=57ac9aae572f436a9dc75121ea1bb779`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(json => {
        const data = json;
        console.log(data);
        this.setState({
          perso: data.results,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  popular2020 = () => {
    fetch(
      `https://api.rawg.io/api/games?dates=2020-01-01,2021-12-31&ordering=-added?key=57ac9aae572f436a9dc75121ea1bb779`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(json => {
        const data = json;
        console.log(data);
        this.setState({
          perso: data.results,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  suggerer = () => {
    fetch(`https://api.rawg.io/api/games/41494/suggested??key=57ac9aae572f436a9dc75121ea1bb779`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(json => {
        const data = json;
        console.log(data)
        this.setState({
          perso: data.results,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  plateforms = () => {
    fetch(
      `https://api.rawg.io/api/platforms?key=57ac9aae572f436a9dc75121ea1bb779`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(json => {
        const data = json;
        console.log(data);
        this.setState({
          perso: data.results,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.callAPI();
  };
  handleChange = e => {
    this.setState({
      filtertext: e.target.value,
    });
  };

  handleCheck = e => {
    this.setState({
      checked: e.target.checked,
    });
  };

  handleKeyPress = e =>{
    if( e.key === 'Enter'){
      this.inputAPI();
    }
  };

  nextpage = () => {
    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      page: ++this.state.page,
    });
    console.log(this.state.page);
    this.callAPI(this.state.page);
    window.scrollTo(0, 360);
  };

  store = () => {
    
    fetch(
      `https://api.rawg.io/api/stores?key=57ac9aae572f436a9dc75121ea1bb779`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(json => {
        const data = json;
        console.log(data);
        this.setState({
          perso: data.results,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  publisher = () => {
    fetch(
      `https://api.rawg.io/api/publishers?key=57ac9aae572f436a9dc75121ea1bb779`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(json => {
        const data = json;
        console.log(data);
        this.setState({
          perso: data.results,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };


  


  render() {
    return (
      <div>
        <MenuListComposition
            bestRatedApi={this.bestRatedApi}
            popular2020={this.popular2020}
            actionAPI={this.actionAPI}
            plateforms={this.plateforms}
            suggerer={this.suggerer}
            store={this.store}
            publisher={this.publisher}
          />
        <section style={{ display: 'flex', justifyContent: 'center', flexDirection :'row', paddingBottom :'50px' }}>
          
          <Fade top><TextField
            InputProps={{
              style: { color: '#ddd' , textAlign : 'right'},
            }}
            color="primary"
            style={{ color: 'white', width:'100%', textAlign : 'right'}}
            placeholder="Rechercher"
            filtertext={this.state.filtertext}
            onChange={this.handleChange}
            value={this.state.filtertext}
            onKeyPress={this.handleKeyPress}
          /></Fade>
        </section>
         
        <JeuxGridList perso={this.state.perso} nextpage={this.nextpage} />
        
        
      </div>
    );
  }
}
