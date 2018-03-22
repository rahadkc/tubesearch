import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './component/SearchBar';
import VideoList from './component/VideoList';
import SelectedVideo from './component/SelectedVideo';
import './App.css';

class App extends Component {
  state = {
    videos: '',
    selected: ''
  }
  componentWillMount() {
    this.fetchVideos('messi');
  }
  fetchVideos = (searchTerm) =>  {
    const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';
    const KEY = 'AIzaSyDAKzdtCP2bBl1ktS2UCmvwij68kxeuuy0';
    const params = {
      part: 'snippet',
      key: KEY,
      q: searchTerm,
      type: 'video'
    };
    axios.get(ROOT_URL, {
      params
    })
    .then(res => {
      this.setState({
        videos: res.data.items,
        selected: res.data.items[0]
      })
    })
  }

  searchHandle = (term) => {
    const searchTerm = (term.length > 0) ? term : 'messi';
    this.setState({
      searchTerm: searchTerm
    });
    this.fetchVideos(searchTerm);
  }

  selectItem = (video) => {
    this.setState({
      selected: video
    })
  }

  render() {
    return (
      <div className="container">
          <div className="row text-center">
            <h1 className="title"><span>Tube</span>Search</h1>
          </div>
          <div className="row">
            <SearchBar searchHandle={this.searchHandle}/>
          </div>
          <div className="row">
            <div className="col-8">{this.state.selected !== '' && <SelectedVideo video={this.state.selected}/>}</div>
            <div className="col-4">
              <div className="videolist">
                <VideoList videos={this.state.videos} selectItem={this.selectItem}/>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
