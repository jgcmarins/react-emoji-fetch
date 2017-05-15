import React, { Component } from 'react';
import MainEmoji from './MainEmoji';
import EmojiForm from './EmojiForm';
import EmojiList from './EmojiList';

class EmojiFetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: [],
      values: [],
      activeEmoji: -1, // MainEmoji
      search: '',      // EmojiForm
      activePage: 1,   // EmojiList
    };

    this.handleSelectEmoji = this.handleSelectEmoji.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelectPage = this.handleSelectPage.bind(this);
  }

  handleSelectEmoji(alt) {
    var id = this.state.keys.indexOf(alt);
    this.setState({
      activeEmoji: id,
    });
  }

  selectId(value) {
    if(value.length === 0) return -1;
    else if(this.state.keys.indexOf(value) > -1) return this.state.keys.indexOf(value);
    else {
      var found = this.state.keys.find(word => {
        return word.includes(value);
      });
      if(found === 'undefined') return -1;
      else return this.state.keys.indexOf(found);
    }
  }

  handleSearch(value) {
    value = value.toLowerCase();
    this.setState({
      search: value,
      activeEmoji: this.selectId(value),
    });
  }

  handleSelectPage(eventKey) {
    this.setState({
      activePage: eventKey,
    });
  }

  componentDidMount() {
    fetch('https://api.github.com/emojis')
    .then(res => res.json())
    .then(emojis => {
      this.setState({
        keys: Object.keys(emojis),
        values: Object.values(emojis),
      })
    })
  }

  render() {
    return (
      <div className="emojiFetch">
        <h1 className="pageHeader1">React Emoji Fetch</h1>
        <h3 className="pageHeader3">
          <small>Fetching emojis from <a href="https://api.github.com/emojis">{"api.github.com/emojis"}</a></small>
        </h3>
        <h4 className="pageHeader4">
          <small>You can <b>search</b> or <b>select</b> an emoji</small>
        </h4>
        <MainEmoji
          keys={this.state.keys}
          values={this.state.values}
          activeEmoji={this.state.activeEmoji}
        />
        <EmojiForm
          search={this.state.search}
          onSearchChange={this.handleSearch}
        />
        <EmojiList
          keys={this.state.keys}
          values={this.state.values}
          activePage={this.state.activePage}
          onSelectPage={this.handleSelectPage}
          onSelectEmoji={this.handleSelectEmoji}
        />
      </div>
    );
  }
}

export default EmojiFetch;
