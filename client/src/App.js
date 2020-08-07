import React, { Component } from 'react';
import Form from './components/Form';
import DisplayTopics from './components/DisplayTopics';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    topics: []
  }

  componentDidMount = () => {
    this.fetchTopics();
    console.log('this is topics' + this.state.topics)
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

  addTopic = ({ topicTitle, description }) => {
    this.setState({
      topics: [...this.state.topics, { topicTitle, description  }]
    });
  };

  render() {
    return (
      <div className="App">
        <Form addTopic={this.addTopic}/>
        <DisplayTopics topics={this.state.topics} />
      </div>
    );
  }
}

export default App;
