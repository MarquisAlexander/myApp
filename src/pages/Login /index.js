import React, { useState } from 'react';
import {
    View,
    Text,
    Alert
} from 'react-native';
import {Input, Button} from '../../components';
import {useDispatch} from 'react-redux';
import {setToken} from '../../store/modules/user/actions';

import styles from './styles';
import api from '../../services/api';
import colors from '../../utils/colors';

const Login = ({navigation}) => {
    const dispatch = useDispatch();

    const [data, setData] = useState({
        password: '',
        username: '',
    });

    const handleLogin = () => {
        console.log(data);
        
        api
            .post('auth/login',data)
            .then((resp) => {
                console.log(resp.headers.authorization)
                dispatch(setToken(resp.headers.authorization));
                // api.defaults.headers.Authorization = `Bearer ${resp.headers.authotization}`;
                Alert.alert('Sucesso')
                navigation.navigate('list');
            })
            .catch((err) => {
                console.log(err)
                Alert.alert('Erro ao fazer login')
            })
        }

    return (
        <View style={styles.container}>
            <View style={{
                // height: 30,
                // flex:1
            }}>
                <Text>Fazer login</Text>
            </View>
            
            <View style={{
                // flex: 1,
                width: '100%',
            }}>
                <Input 
                    value={data.username}
                    placeHolder='User'
                    onChangeText={(text) => setData({...data, username: text})}
                />
                <Input 
                    value={data.password}
                    placeHolder='Password'
                    onChangeText={(text) => setData({...data, password: text})}
                />

                <Button
                    title="Entrar"
                    onPress={handleLogin}
                    backgroundColor={colors.green}
                />
            </View>
        </View>
    )
}

export default Login;