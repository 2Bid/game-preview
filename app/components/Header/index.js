import React from 'react';
import Img from './Img';
import Banner from './banner.jpg';

import Fade from 'react-reveal/Fade';

function Header() {
  
  return (
    <Fade top>
      <div style={{
      width : '1032px',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingBottom :'120px',
      }}>
        <Img src={Banner} alt="header" onClick={()=>{reaload()}} />
    </div>
    </Fade>
    );
}

export default Header;
