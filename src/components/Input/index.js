import React from 'react';
import {View, Text, TextInput} from 'react-native';
import colors from '../../utils/colors';
import styles from './styles';

export default function Input({
  placeHolder,
  placeHolderError,
  onChangeText,
  value,
  keyboardType,
  error,
  ...props
}) {
  return (
    <View style={[styles.container]}>
      <TextInput
        value={value}
        style={styles.input}
        placeholderTextColor={error ? colors.delete : colors.textSecondary}
        keyboardType={keyboardType}
        placeholder={error ? placeHolderError : placeHolder}
        onChangeText={onChangeText}
        {...props}
      />
    </View>
  );
}

// export Input;
