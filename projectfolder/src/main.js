import React, { Component } from 'react';
import config from "../src/config";

export default class Main extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div class="picDiv">
                        <img src = {config.PERSONAL_LINK} height = "600" width = "500"></img>
                    </div>
                    <div class="nameDiv">
                        <p>{config.NAME}</p>
                    </div>
                    <div class="desDiv">
                        <p>{config.ABOUT}</p>
                    </div>

                </div>

            </div>
        )
    }
}