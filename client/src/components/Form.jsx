import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';

class Form extends Component {
  state = {
      topicTitle: '',
      description: '',
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  submit = e => {
    e.preventDefault();
    const { topicTitle, description } = this.state;
    axios({
      url: '/topics',
      method: 'POST',
      data: {
        topicTitle,
        description
      }
    })
      .then((response) => {
        this.props.addTopic(response.data);
        this.setState({
          topicTitle: '',
          description: ''
        });
      })
      // .catch(() => alert('Failed uploading data'))
  };
  render() {
    return (
      <form className="form noValidate" autoComplete="off" onSubmit={this.submit}>
        <h2> Digital Brain anno 2020 </h2>
        <TextField
          id="standard-dense"
          value={this.state.topicTitle}
          label="Topic Title"
          name="topicTitle"
          onChange={this.handleChange}
        />

        <TextField
          name="description"
          value={this.state.description}
          id="standard-dense"
          onChange={this.handleChange}
          label="description"
        />

        <Button variant="contained" color="primary" onClick={this.submit}> Submit </Button>

      </form>
    );
  }
}

export default Form;
