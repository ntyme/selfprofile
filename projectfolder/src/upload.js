import { AlexaForBusiness } from 'aws-sdk';
import React, { Component } from 'react';
import axios from 'axios';
import api from './api';
import { select } from 'async';

export default class Upload extends Component {

  constructor(props) {
    super(props);
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
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  SubmitData = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    data.append("file", this.state.selectedFile, this.state.description);
    console.log()
    console.log(data);
    api.Upload(data).then(result => { console.log(result) }).catch(err => { console.log(err) })

    /*
    e.preventDefault();
    var bool = new Boolean(true);
    const { name, about, selectedFile, description } = this.state;
    console.log(this.state.selectedFile);
    if (selectedFile == null) { bool = false; alert("All fields required") }
    if (name == null) { bool = false; alert("All fields required") }
    if (about == null) { bool = false; alert("All fields required") }
    if (description == null) { { bool = false; alert("All fields required") } }
    if (bool) {
      const data = new FormData(e.target);
      data.append("file", this.state.selectedFile, this.state.description);
      data.append("name", name);
      data.append("about", about);
      console.log(data);
      api.Upload(data).then(result => { console.log(result) }).catch(err => { console.log(err) })

    } */
  }

  handleUpload = event => {
    event.preventDefault();
    var bool = new Boolean(true);
    const { name, about, selectedFile, description } = this.state;
    if (selectedFile == null) { bool = false; alert("All fields required") }
    if (name == null) { bool = false; alert("All fields required") }
    if (about == null) { bool = false; alert("All fields required") }
    if (description == null) { { bool = false; alert("All fields required") } }
    if (bool) {
      const data = new FormData(event.target);
      data.append("file", this.state.selectedFile, this.state.description);
      data.append("name", this.state.name);
      data.append("about",this.state.about)
      //data.append("name", this.state.name.value);
      //data.append("about", this.state.about.value);
      api.Upload(data).then(result => { console.log(result); }).catch(err => { alert(err); })
    }
  }

  render() {
    const {description, selectedFile } = this.state;
    return (
      <form enctype="multipart/form-data" onSubmit={this.SubmitData}>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            class="form-control"
            name="description"
            onChange={this.onChange}
            placeholder="Description"
          />
             <input
            type="file"
            name=""
            id=""
            onChange={this.handleSelectedFile}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Upload
        </button>
      </form>
    )
  }
}