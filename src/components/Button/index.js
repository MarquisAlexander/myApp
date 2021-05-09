import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'
import colors from '../../utils/colors';


const Button = ({
        title, 
        description, 
        icon, 
        value, 
        onPress,
        nameScreen, 
        backgroundColor, 
        loading,
        ...rest
}) => {
    
    return (
        <TouchableOpacity 
            onPress={onPress}
            style={[styles.container, {backgroundColor: backgroundColor}]}
            disabled={loading}
            {...rest}
        >
            {loading ?
                <ActivityIndicator color={colors.white}/>
            :
                <View>
                    <Text style={styles.title}>{title}</Text>
                </View>
            }
        </TouchableOpacity>
    )
}

export default Button;