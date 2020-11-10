import React, { Component } from 'react';
import ImageModel from "./ImageModel.js";
import creds from "./getprofile";
import { getDefaultNormalizer } from '@testing-library/react';
import axios from 'axios';
import config from "../src/config";
import api from "../src/api";
import { MongoClient, ReplSet } from 'mongodb';
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
    componentDidMount(){
        api.Display().then(info => {
            this.setState({profiles: info.data.data}); 
            for (var i = 0; i < this.state.profiles.length; i++){
                if (this.state.profiles[i].name = localStorage.getItem('name')){
                    this.setState({name: this.state.profiles[i].name});
                    this.setState({about: this.state.profiles[i].about});
                    this.setState({pic: this.state.profiles[i].fileLink});
                }
                else{
                    this.setState({name: "Luna"});
                    this.setState({about: "Rescued in 2017."});
                    this.setState({pic: config.LUNA_LINK});
                }
            }
        }).catch(err => {console.log(err); alert(err);})
    }

    render() {

        const {profiles, name, pic, about} = this.state;
        console.log(this.state.profiles);
        return (
            <div>
                <div class="container">
                    <div class="picDiv">
                        <img src = {this.state.pic} height = "500" width = "500"></img>
                    </div>
                    <div class="nameDiv">
                        <p>{this.state.name}</p>
                    </div>
                    <div class="desDiv">
                        <p>{this.state.about}</p>
                    </div>
                </div>
            </div>
        )
    }
}