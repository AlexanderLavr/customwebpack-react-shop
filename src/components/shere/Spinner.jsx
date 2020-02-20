import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';


export default class Spinner extends Component {
    render() {
        return (
            <div className="spinnerContainer">
                <CircularProgress size={250}/>
                <p className="spinnerContent">Loading...</p>
            </div>
        );
    }
}