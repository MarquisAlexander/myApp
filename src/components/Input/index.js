import React from 'react';
import {
    View,
    Text,
    TextInput,
} from 'react-native';
import styles from './styles';

export default function Input({
    placeHolder,
    onChangeText,
    value,
    keyboardType,
    ...props
}) {

    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                style={styles.input}
                placeholderTextColor="#9C9C9C"
                keyboardType={keyboardType}
                placeholder={placeHolder}
                onChangeText={onChangeText}
                {...props}
            />
        </View>
    )
}

// export Input;