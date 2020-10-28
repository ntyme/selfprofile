import React, { Component } from 'react';

export default class Upload extends Component {
    render() {
        return (
            <div>
                <h1>Upload!</h1>
                <form action='/upload' method='post'>
                    <input type="file" name="photo" /><br></br>
                        <label for="text"> Description: </label>
                        <input type="text" name="desc" />
                        <input type="submit" />
                </form>
            </div>

        )
    }
}