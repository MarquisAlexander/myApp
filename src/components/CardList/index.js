import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import colors from '../../utils/colors';
import styles from './styles';

export default function CardList({
    onPressX,
    onPressEdit,
    title,
    price,
    ingredients = [],
}) {

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.containerContent}>
                <Text style={styles.text}>Nome: {title} </Text>
                <Text style={styles.text}>Preço: {price}</Text>
            </View>

            <View style={styles.containerContent}>
                <Text style={styles.text}>Ingredientes</Text>
                <Text style={styles.text}>Quantidade</Text>
            </View>
            
            {ingredients.map((item) => (
                <View style={styles.containerContent}>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={styles.text}>{item.quantity}</Text>
                </View>
            ))}

            <View style={{
                flexDirection: 'row',
            }}>
                <TouchableOpacity 
                    onPress={onPressX}
                    style={{
                        backgroundColor: colors.delete,
                        padding: 10,
                        flex:1
                    }}
                >
                    <Text style={{
                        textAlign: 'center',
                        color: '#fff'
                    }}>X</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={onPressX}
                    style={{
                        backgroundColor: colors.green,
                        padding: 10,
                        flex:1

                    }}
                >
                    <Text style={{
                        textAlign: 'center',
                        color: '#fff'
                    }}>Editar</Text>
                </TouchableOpacity>
            </View>


        </TouchableOpacity>
    )
}