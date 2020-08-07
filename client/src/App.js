import React, { Component } from 'react';
import Form from './components/Form';
import DisplayUsers from './components/DisplayUsers';
import DisplayTopics from './components/DisplayTopics';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    topics: []
  }

  componentDidMount = () => {
    this.fetchUsers();
    this.fetchTopics();
    console.log('this is topics' + this.state.topics)
    console.log('this is users' + this.state.users)
  };

  fetchUsers = () => {
    axios.get('/users')
      .then((response) => {
        const { users } = response.data;
        this.setState({ 
          users: [...this.state.users, ...users] 
        })
      })
      .catch(() => alert('Error fetching new users'));
  };

  fetchTopics = () => {
    axios.get('/topics')
      .then((response) => {
        const { topics } = response.data;
        this.setState({
          topics: [...this.state.topics, ...topics]
        })
      })
      .catch(() => alert('Error fetching topics'));
  };

  addUser = ({ name, position, company }) => {
    this.setState({
      users: [...this.state.users, { name, position, company }]
    });
  };

  render() {
    return (
      <div className="App">
        <Form addUser={this.addUser}/>
        < DisplayTopics topics={this.state.topics} />
        {/* < DisplayUsers users={this.state.users} /> */}
        {/* <h1>{this.state.topics.topicTitle}</h1> */}
        {/* {
          this.state.topics.map((topic, i) => (
            <p key={i}>{topic.topicTitle}</p>
          ))
        } */}
      </div>
    );
  }
}

export default App;
