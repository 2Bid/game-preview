import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import SearchPerso from 'containers/SearchPerso/Loadable';
import CardDetail from 'containers/SearchPerso/CardDetail';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;



export default function App() {
  return (
    <AppWrapper style={{backgroundColor:'#212121'}}>
      <Helmet
        defaultTitle="Game Preview"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header onClick={()=>{window.location.reload}}/> {/* don't work */}
      <Switch>
        <Route exact path="/" component={SearchPerso} />
        <Route path="/SearchPerso" component={SearchPerso} />
        <Route path="/CardDetail" component={CardDetail} render={props => (<ComponentName location={props.location} {...props}/>)}/>

        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
