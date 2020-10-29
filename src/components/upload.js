import { AlexaForBusiness } from 'aws-sdk';
import React, { Component } from 'react';
import axios from 'axios';

export default class Upload extends Component {
    state = {
        fileArg: null,
        name: '',
        description: ''
    }
    constructor(props) {
        super(props)
        this.updateDescription = this.updateDescription.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateFileArg = this.updateFileArg.bind(this);
        this.handlePhotoUpload = this.handlePhotoUpload.bind(this);

        this.state = {
            name: '',
            fileArg: null,
            description: ""
            
        };
    }

    updateFileArg(e) {
        this.setState({ fileArg: e.target.value })
    }
    updateDescription(e) {
        this.setState({ description: e.target.value })
    }
    updateName(e) {
        this.setState({ name: e.target.value })
    }

    handlePhotoUpload = event => {
        event.preventDefault();
        const {name, fileArg, description} = this.state;
        const data = {name, fileArg, description};
        console.log(name, description, fileArg);
        //axios post call
        axios.post('http://localhost:4000/DatabaseSubmit', data)
            .then(result =>{
                alert("SUCCESS");
            }).catch(err =>{
                alert(err);
            })
    }


    render() {
        return (
            <div>
                <h1>Upload!</h1>
                <form onSubmit={this.handlePhotoUpload}>
                    <input type="file" value={this.state.fileArg} onChange={this.updateFileArg} /><br></br>
                    <label for="text"> Description: </label>
                    <input type="text" value={this.state.description} onChange={this.updateDescription} /><br></br>
                    <label for="text"> Name: </label>
                    <input type="text" value={this.state.name} onChange={this.updateName} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}