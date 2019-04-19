import React, { Component } from 'react';

import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import FloatCart from '../FloatCart';
import AppBar from '../AppBar/appBar'
import IntegrationAutosuggest from '../SearchBar/searchBar'


class App extends Component {
  render() {
    return (
      <>
        <AppBar/>
        <div style={{width:'50%',position:'absolute',top:'150px',left:'25%'}}>
          <IntegrationAutosuggest/>
        </div>
        <main style ={{marginTop:'200px'}}>
          <Filter />
          <Shelf />
        </main>
        <FloatCart />
      </>
    );
  }
}

export default App;
