import React from 'react'
import CardDetailVideo from '../SearchPerso/CardDetailVideo'
import  './CardDetailCss.css';
import Fade from 'react-reveal/Fade';
import playstation from './images/playstation.png';
import xboxone from './images/xboxone.png';
import pc from './images/pc.png';

import CircularProgress from '@material-ui/core/CircularProgress';

export default function CardDetailInfo(props) {
    return (

        <div className='container'>
            <Fade top>{props.jeuInfo.website ? <a href={props.jeuInfo.website} target='blank'>{props.jeuInfo.name}</a> : <h1>{props.jeuInfo.name}</h1>}
            {props.jeuInfo.developers[0] ? <h3>Développé par {props.jeuInfo.developers[0].name}</h3> : <p></p>}</Fade>
 
            <Fade top><p>Noté {props.jeuInfo.rating}/5</p></Fade>
 
            <Fade top><div style={{display:'flex', justifyContent:'space-around', width:'200px'}}>







                
                {props.jeuInfo.platforms[0]&&props.jeuInfo.platforms[0].platform.slug=='pc' ? <img className="plateformes-img" src={pc}/> : <p></p>}
                {props.jeuInfo.platforms[1]&&props.jeuInfo.platforms[1].platform.slug=='pc' ? <img className="plateformes-img" src={pc}/> : <p></p>}
                {props.jeuInfo.platforms[2]&&props.jeuInfo.platforms[2].platform.slug=='pc' ? <img className="plateformes-img" src={pc}/> : <p></p>}

                {props.jeuInfo.platforms[0] && props.jeuInfo.platforms[0].platform.slug=='playstation5' ? <img className="plateformes-img" src={playstation}/> : <p></p>}
                {props.jeuInfo.platforms[1]&&props.jeuInfo.platforms[1].platform.slug=='playstation5' ? <img className="plateformes-img" src={playstation}/> : <p></p>}
                {props.jeuInfo.platforms[2]&&props.jeuInfo.platforms[2].platform.slug=='playstation5' ? <img className="plateformes-img" src={playstation}/> : <p></p>}

                {props.jeuInfo.platforms[0]&&props.jeuInfo.platforms[0].platform.slug=='xbox-series-x' ? <img className="plateformes-img" src={xboxone}/> : <p></p>}
                {props.jeuInfo.platforms[1] && props.jeuInfo.platforms[1].platform.slug=='xbox-series-x' ? <img className="plateformes-img" src={xboxone}/> : <p></p>}
                {props.jeuInfo.platforms[2] && props.jeuInfo.platforms[2].platform.slug=='xbox-series-x' ? <img className="plateformes-img" src={xboxone}/> : <p></p>}
                
            </div></Fade>
            
            <Fade bottom><p className='description'>{props.jeuInfo.description_raw}</p></Fade>

            <div className='row1'>
                <Fade left><img className='img' src={props.jeuInfo.background_image_additional}></img></Fade>
                <Fade right><img className='img' src={props.jeuInfo.background_image}></img></Fade>
            </div>
            {props.jeuInfo.clip ?
            <div className='row-video'>
            <Fade bottom>{props.jeuInfo.clip ? <CardDetailVideo jeuInfo={props.jeuInfo} /> : <p></p>}</Fade>
        </div> : <CircularProgress/>}
            
            <h2 className='tag'>Tags</h2>
            {props.jeuInfo.tags.map(i =>(
                <p key={i.id}>{i.name} </p>
                
            ))}
        </div>
    )
}
