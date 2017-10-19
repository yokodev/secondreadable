import React, { Component } from 'react';
import { Button, Menu, Dropdown } from 'semantic-ui-react';
class MyMenu extends Component {
  handleOpen = data => {
    this.props.handleOpen();
  };
  handleVoteClick = (data, { value }) => {
    this.props.handleVote(value);
  };

  render() {
    return (
      <Menu attached="top">
        <Menu.Item>
          <Button onClick={this.handleOpen}>{this.props.addTitle}</Button>
        </Menu.Item>
        <Menu.Menu position="right">
          <Dropdown item text="Sort By" icon="sort">
            <Dropdown.Menu>
              <Dropdown.Item value="voteScore" onClick={this.handleVoteClick}>
                VoteScore
              </Dropdown.Item>
              <Dropdown.Item value="timestamp" onClick={this.handleVoteClick}>
                Timestamp
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default MyMenu;
