import React, { Component } from 'react';
import('../src/styles.css')

export default class Display extends Component {
    render() {
        return (

            <div class="container">
                <div class="picDiv">
                    <p>
                        This is the pic
                    </p>
                </div>
                <div class="nameDiv">
                    <p>
                        Name
                    </p>
                </div>
                <div class="desDiv">
                    <p>
                        This is the description
                    </p>
                </div>

            </div>


        )
    }
}