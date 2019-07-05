import React, { Component } from 'react';

import SearchBar from './searchBar';
import Gif from './gif';
import GifList from './gifList';


class App extends Component {
  render() {
    const gifs = [
      { id: 'j38LTRE3LiirEaFLz9' },
      { id: '3o6Zt6NPQItgZEK10c' }
    ];


    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="JUeBAaFX0fBfycynYb" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
