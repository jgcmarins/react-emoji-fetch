import React, { Component } from 'react';
import { Form, FormGroup, InputGroup, FormControl } from 'react-bootstrap';

class EmojiForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.getValidationStateSearch = this.getValidationStateSearch.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  getValidationStateSearch() {
    return this.props.searchStatus;
  }

  handleSearchChange(e) {
    e.preventDefault();
    this.props.onSearchChange(e.target.value);
  }

  render() {
    return (
      <div className="emojiForm">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup
            controlId="search"
            validationState={this.getValidationStateSearch()}
          >
            <InputGroup>
              <InputGroup.Addon>Search:</InputGroup.Addon>
              <FormControl
                autoComplete="off"
                type="text"
                value={this.props.search}
                placeholder="Type something that describes the emoji"
                onChange={this.handleSearchChange}
              />
            </InputGroup>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default EmojiForm;
