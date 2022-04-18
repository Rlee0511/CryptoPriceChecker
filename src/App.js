import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import {Navbar, Homepage, Exchanges, CryptoDetails, Cryptocurrencies,News} from './components';
import './App.css';
 

const App = () => {
  return (
    <div classname="app">
       <div classname="navbar">
           <Navbar />
       </div>
       <div classname="main">
           <Layout>
               <div classname="routes">
                   <Switch>
                       <Route exact path="/">
                            <Homepage />
                       </Route>
                       <Route exact path="/exchanges">
                            <Exchanges />
                       </Route>
                       <Route exact path="/cryptocurrencies">
                            <Cryptocurrencies />
                       </Route>
                       <Route exact path="/crypto/:coinId">
                            <CryptoDetails />
                       </Route>
                       <Routes exact path="/news">
                            <News />
                       </Routes>
                   </Switch>
               </div>
           </Layout>

        </div>
       <div classname="footer">

       </div>

    </div>
  );
}

export default App;