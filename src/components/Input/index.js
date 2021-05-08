import React from 'react';
import {
    View,
    Text,
    TextInput,
} from 'react-native';
import styles from './styles';

export default function Input({
    placeHolder,
    onChangeText
}) {

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholderTextColor="red"
                placeholder={placeHolder}
                onChangeText={onChangeText}
            />
        </View>
    )
}

// export Input;