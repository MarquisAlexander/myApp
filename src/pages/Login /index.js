import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import {Input, Button} from '../../components';

import styles from './styles';

function Login({navigation}) {

    function handleLogin(event) {
        console.log('dentro da função', event)
    }

    return (
        <View style={styles.container}>
            <Text>Fazer login</Text>
                <Input 
                    placeHolder='User'
                    onChangeText={event => handleLogin(event)}
                />
                <Input 
                    placeHolder='Password'
                    onChangeText={event => handleLogin(event)}
                />

                <Button
                    title="Entrar"
                    nameScreen="list"
                />
        </View>
    )
}

export default Login;