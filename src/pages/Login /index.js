import React, { useState } from 'react';
import {
    View,
    Text,
    Alert
} from 'react-native';
import {Input, Button} from '../../components';
import {useDispatch} from 'react-redux';
import {setToken, setUser} from '../../store/modules/user/actions';

import styles from './styles';
import api from '../../services/api';
import colors from '../../utils/colors';

const Login = ({navigation}) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [data, setData] = useState({
        password: '',
        username: '',
    });

    const handleLogin = () => {
        setLoading(true);
        
        if (!data.password || !data.username) {
            setError(true);
            setLoading(false)
            setTimeout(() => {
                setError(false);
            }, 1000);
        } else {
            setError(false);
            api
                .post('auth/login',data)
                .then((resp) => {
                    dispatch(setToken(resp.headers.authorization));
                    dispatch(setUser(resp.data.name));
                    Alert.alert('Sucesso')
                    // api.defaults.headers.Authorization = `Bearer ${resp.headers.authorization}`;
                    navigation.navigate('list');
                })
                .catch((err) => {
                    console.log(err)
                    Alert.alert('Erro ao fazer login')
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }

    return (
        <View style={styles.container}>
            <Text>Fazer login</Text>
            
            <View style={{
                width: '100%',
            }}>
                <Input 
                    value={data.username}
                    placeHolder='User'
                    onChangeText={(text) => setData({...data, username: text})}
                    error={error}
                    placeHolderError='Voc?? precisa inserir o usu??rio'
                />
                <Input 
                    value={data.password}
                    placeHolder='Password'
                    onChangeText={(text) => setData({...data, password: text})}
                    error={error}
                    placeHolderError='Voc?? precisa inserir uma senha'
                />

                <Button
                    title="Entrar"
                    onPress={handleLogin}
                    backgroundColor={colors.green}
                    loading={loading}
                />
            </View>
        </View>
    )
}

export default Login;