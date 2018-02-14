import React from 'react';
import agent from '../../agent';
const { Map } = require('immutable')
var map1 = Map();

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      value: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev){
    const target = ev.target;
    const value = target.checked;
    const username = target.name;

    this.setState({
      [username]: value
    });

    if(value === false) {
      map1 = map1.delete(`${username}`);
    } else {
      map1 = map1.set(`${username}`, value); 
    }

    var usernames = map1.keySeq().toArray();

    this.props.onClickFilter(agent.Articles.all, 
      agent.Articles.byAuthor(usernames));
  }

  render() {
    if (this.props.users) {
      return (
        <div>
          <h3>Filter</h3>
          <ul>
            { 
              this.props.users.map( user => {
                return ( 
                  <li key={user._id}>
                    <input 
                      type='checkbox' 
                      name={user.username}
                      id={user._id}
                      value={this.state.value}
                      onChange={this.handleClick}
                       />
                    {user.username} : {user.email}
                  </li>
                );
              }) 
            }
          </ul>
        </div>
      );
    } else {
      return (
        <div>Loading Users...</div>
      );
    }
}
};

export default Filter;

