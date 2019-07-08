import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './searchBar';
import Gif from './gif';
import GifList from './gifList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: 'JUeBAaFX0fBfycynYb'
    };

    this.search('homer thinking');
  }

  search = (query) => {
    giphy('hr2IWKg2eYqWXUkxBVjrCp1sx36fOUs7').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    const gifs = [
      { id: 'j38LTRE3LiirEaFLz9' },
      { id: '3o6Zt6NPQItgZEK10c' }
    ];


    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
