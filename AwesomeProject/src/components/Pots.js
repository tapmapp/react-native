import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

class Pots extends Component {

    componentDidMount() {
        fetch('https://getapot.com/api/pot').then(
            res => res.json()
        ).then(data => {
            this.setState({pots: data.data});
        });
    }

    render() {

        const pots = this.state.pots.map(pot => {
            console.log(pot)
        });
        
        return(
            <Text>Pots container</Text>
        );
        
    }

}

Pots.propTypes = {
    pots: PropTypes.object
}

const mapStateToProps = state => ({
    pots: state.pots
});

export default connect(mapStateToProps, null)(Pots);