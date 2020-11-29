import React, { Component } from 'react';
import axios from 'axios';
import config from "./config";
import('../src/styles.css')

export default class exampleAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmedCases: "",
            date: ""
        };
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    getConfirmedCases = (e) => {
        e.preventDefault();
        var options = {
            method: 'GET',
            url: 'https://covid1910.p.rapidapi.com/data/confirmed/country/us/date/' + this.state.date,
            headers: {
                'x-rapidapi-key': config.RAPID_API_KEY,
                'x-rapidapi-host': config.RAPID_API_HOST
            }
        };
        axios.request(options).then((response) => {
            this.setState({ confirmedCases: response.data[0].confirmed });
        }).catch(function (error) {
            console.error(error);
            alert("Date Must be 01-23-2020 or after, Before Today's Date, and (MM-DD-YYY) Format!")
        });
    }
    render() {
        const confirmedCases = this.state;
        return (
            <div>
                <form enctype="multipart/form-data" onSubmit={this.getConfirmedCases}>
                    <input
                        type="text"
                        name="date"
                        onChange={this.onChange}
                        placeholder="Date: (MM-DD-YYY)"
                    />
                    <button type="submit" class="btn btn-primary">
                        Search
                </button>
                </form>
                <div>
                    <p>Total COVID-19 Cases in USA as of {this.state.date}: {this.state.confirmedCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                </div>
            </div>
        )
    }
}