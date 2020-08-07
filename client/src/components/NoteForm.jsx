import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';

class NoteForm extends Component {
  state = {
      note: '',
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  submit = (e) => {
    e.preventDefault();
    const { note } = this.state;
    const { _id } = this.props;
    axios({
      url: `/topics/${_id}/note`,
      method: 'PATCH',
      data: {
        note
      }
    })
      .then((response) => {
        // this.props.addNote(response.data);
        this.setState({
            note: ''
        });
      })
      // .catch(() => alert('Failed uploading data'))
  };
  render() {
    return (
      <form className="form noValidate" autoComplete="off" onSubmit={this.submit}>
        <h2> New Note  </h2>
        <TextField
          id="standard-dense"
          value={this.state.note}
          label="Note"
          name="note"
          onChange={this.handleChange}
        />


        <Button variant="contained" color="primary" onClick={this.submit}> Submit </Button>

      </form>
    );
  }
}

export default NoteForm;
