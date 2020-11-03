import React, { Component } from 'react';
import ImageModel from "./ImageModel.js";
import creds from "./getprofile";
import { getDefaultNormalizer } from '@testing-library/react';
import axios from 'axios';
import config from "../src/config";
import api from "../src/api";
import { ReplSet } from 'mongodb';
import('../src/styles.css')

export default class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: [],
            name: "",
            about: "",
            pic: ""
        };

    }
    handleDisplay = () => {
        api.Display(this.state.name)
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    render() {
        const profiles = this.state;
        console.log(this.state.profiles);
        return (
            <div>
                <div class="container">
                    <div class="picDiv">
                        <p>Profile Pic Div</p>
                    </div>
                    <div class="nameDiv">
                        <input
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            placeholder="Name"
                        />
                        <button type="submit" class="btn btn-primary" onSubmit = {this.handleDisplay()}>
                            Display
                        </button><br></br><br></br>
                    </div>
                    <div class="desDiv">
                        <p>About</p>
                    </div>

                </div>

            </div>


        )
    }
}