import React, { Component } from 'react';
import { connect } from 'react-redux';


class Home extends Component {
    render() {
        return (
            <div>
                Example
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    example: state.home.example
})

export default connect(
    mapStateToProps, 
    { }
)(Home)