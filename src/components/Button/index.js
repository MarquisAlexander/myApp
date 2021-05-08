import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'


const Button = ({title, description, icon, value, onPress, nameScreen, backgroundColor, ...rest}) => {
    
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            onPress={onPress}
            style={[styles.container, {backgroundColor: backgroundColor}]}
            {...rest}
        >
            <View>
                <Text style={styles.title}>{title}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default Button;