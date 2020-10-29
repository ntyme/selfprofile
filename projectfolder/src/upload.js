import { AlexaForBusiness } from 'aws-sdk';
import React, { Component } from 'react';
import axios from 'axios';
import api from './api';

export default class Upload extends Component {

  constructor(props) {
    super(props)
    this.state = {
      description: "",
      about: '',
      name: '',
      selectedFile: null
    };

  }
  /*componentDidMount = () => {
    const data = new FormData(event.target);
    data.append("file", this.state.selectedFile, this.state.description);
    console.log(data);
    api.Upload().then(result =>{console.log(result);}).catch(err => {alert("SOMETHING WENT WRONG");})
  } */
  handleSelectedFile = e => {
    e.preventDefault();
    console.log("FOUND:");
    console.log(e.target.files[0]);
    this.setState({
      description: e.target.value,
      selectedFile: e.target.files[0]
    });
  };
  handleName = e => {
    e.preventDefault();
    this.setState({
      name: e.target.value,
    });
  };
  handleAbout = e => {
    e.preventDefault();
    this.setState({
      about: e.target.value,
    });
  };

  handleUpload = event => {
    event.preventDefault();
    var bool = new Boolean(true);
    const { name, about, selectedFile, description } = this.state;
    if (selectedFile == null) { bool = false; alert("All fields required") }
    if (name == null) { bool = false; alert("All fields required") }
    if (about == null) { bool = false; alert("All fields required") }
    if (description == null){{ bool = false; alert("All fields required") }}
    if (bool) {
      const data = new FormData(event.target);
      data.append("file", this.state.selectedFile, this.state.description, this.state.name, this.state.about);
      api.Upload('/upload', data).then(result => { console.log(result); }).catch(err => { alert(err); })
    }

  }

  render() {
    return (
      <div>
        <h1>Upload!</h1>
        <form  onSubmit={this.handleUpload}>
          <input type="file" class = "fileArg" name = "fileArg" value={this.state.fileArg} onChange={this.handleSelectedFile} /><br></br>
          <label for="text"> About: </label>
          <input type="text" value={this.state.about} name="about" onChange={this.handleAbout} /><br></br>
          <label for="text"> Name: </label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleName} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}