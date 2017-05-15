import React, { Component } from 'react';
import { Table, Image, Pagination } from 'react-bootstrap';

class EmojiList extends Component {
  constructor(props) {
    super(props);

    this.handleSelectPage = this.handleSelectPage.bind(this);
    this.handleClickEmoji = this.handleClickEmoji.bind(this);
  }

  prepareRows(n) {
    var start = ((n*9) - 9);
    var end = (n*9);
    var row = [];
    for(var i = start ; i < end ; i++) {
      var img = '';
      if(this.props.keys[i] != null) {
        img = <Image
                onClick={this.handleClickEmoji}
                title={":" + this.props.keys[i] + ":"}
                alt={this.props.keys[i]}
                src={this.props.values[i]}
                width="20" height="20"
              />
      }
      row.push(<td key={i} id={i}>{img}</td>);
    }
    return row;
  }

  prepareTables(n) {
    var start = (((n*4) - 4) + 1);
    var end = (n * 4);
    var tables = [];
    for(var i = start ; i <= end ; i++) {
      var rows = this.prepareRows(i);
      tables.push(
        <Table className="emojiList" responsive key={i}>
          <tbody>
            <tr>
              {rows}
            </tr>
          </tbody>
        </Table>
      );
    }
    return tables;
  }

  handleSelectPage(eventKey) {
    this.props.onSelectPage(eventKey);
  }

  handleClickEmoji(e) {
    e.preventDefault();
    this.props.onSelectEmoji(e.target.alt);
  }

  render() {
    var tables = this.prepareTables(this.props.activePage);
    return (
      <div className="emojiList">
        <div className="emojiTable">
          {tables}
        </div>
        <Pagination
          prev
          next
          ellipsis
          boundaryLinks
          items={42}
          maxButtons={3}
          activePage={this.props.activePage}
          onSelect={this.handleSelectPage}
        />
      </div>
    );
  }
}

export default EmojiList;
