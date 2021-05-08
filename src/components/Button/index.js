import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Button({title, description, icon, value, onPress, nameScreen}) {
    
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            onPress={() => navigation.navigate(nameScreen)}
        >
            <View>
                <Text>{title}</Text>
            </View>

        </TouchableOpacity>
    )
}