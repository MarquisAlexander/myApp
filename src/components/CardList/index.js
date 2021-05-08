import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
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
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                // flex: 1
            }}>
                <Text>Nome: {title} </Text>
                <Text>Preço: {price}</Text>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Text>Nome</Text>
                <Text>Quantidade</Text>
            </View>
            {ingredients.map((item) => (
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text>{item.name}</Text>
                    <Text>{item.quantity}</Text>
                </View>
            ))}

            <View style={{
                flexDirection: 'row',
            }}>
                <TouchableOpacity 
                    onPress={onPressX}
                    style={{
                        backgroundColor: 'red',
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
                        backgroundColor: 'blue',
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