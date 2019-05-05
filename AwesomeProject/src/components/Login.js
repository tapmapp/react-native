import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

// ACTIONS
import { setLoginUser } from '../actions/login.actions';

class Login extends Component {

    constructor() {
        super()
        
        this.user = {
            userName: 'User',
            password: 'Password'
        }

        this.onLoginChange = this.onLoginChange.bind(this);

    }

    onLoginChange(key, value) {

        this.user[key] = value;

        this.props.setLoginUser(this.user);

    }

    render() {        
        return(
            <View style={{ height: 120, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 0.5 , width: '60%', backgroundColor: '#ece9dc', marginBottom: 10 }}>
                    <TextInput
                        style={{ paddingLeft: 12, paddingRight: 12, textAlignVertical: 'center' }}
                        placeholder={this.user.userName}
                        onChangeText={(value) => this.onLoginChange('userName', value)}
                    />
                </View>
                <View style={{ flex: 0.5, width: '60%', backgroundColor: '#ece9dc', marginBottom: 10}}>
                    <TextInput
                        style={{ paddingLeft: 12, paddingRight: 12, textAlignVertical: 'center' }}
                        placeholder={this.user.password}
                        onChangeText={(value) => this.onLoginChange('password', value)}
                    />
                </View>
            </View>
        );
        
    }

}

Login.propTypes = {
    setLoginUser: PropTypes.func.isRequired,
}

export default connect(null, { setLoginUser })(Login);