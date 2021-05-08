import React, { useState } from 'react';
import {
    View,
    Text,
    Alert,
    TouchableOpacity,
    FlatList,
    ScrollView
} from 'react-native';
import {Input, Button} from '../../components';
import {useSelector} from 'react-redux';

import styles from './styles';
import api from '../../services/api';
import colors from '../../utils/colors';

const CreateItem = ({navigation}) => {
    const [ingredientes, setIngredientes] = useState(false);
    const [updateList, setUpdateList] = useState(false);

    const { token } = useSelector(store => store.user);

    const [data, setData] = useState({
        id: 0,
        image: '',
        ingredients: [],
        name: '',
        price: 0
    });

    const [ingrediente, setIngrediente] = useState({
        cost: 0,
        id: 0,
        name: '',
        quantity: 0
    })

    const handleCreateItem = () => {
       console.log('dentro', data)
       
       api
       .post('product/save',data, {
           headers: {
            authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMTciLCJleHAiOjE2MjA1Mjg0MTgsImlhdCI6MTYyMDQ4NTIxOH0.2ppNusxsbQ1in1PYLuRPPkVtQ37kYuA2ieK6Leg9LpGNEMbW8gUvsBYHhDuME5akExn4IS5s660vnbLGFneZeQ`
           }
       })
       .then((resp) => {
           console.log('produto cadastrado')
           Alert.alert('Sucesso')
           navigation.navigate('list');
       })
    }

    const saveIngrediente = () => {
       console.log('adicionar', ingrediente)
       data.ingredients.push(ingrediente)
       console.log(data.ingredients)
       setUpdateList(!updateList)
    }

    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}>Cadastrar item</Text>
                <Input 
                    value={data}
                    placeHolder='Url imagem'
                    keyboardType='numeric'
                    onChangeText={(text) => setData({...data, price: text})}
                />
                <Input 
                    value={data.name}
                    placeHolder='Nome'
                    onChangeText={(text) => setData({...data, name: text})}
                />
                <Input 
                    value={data.price}
                    placeHolder='Preço'
                    keyboardType='numeric'
                    onChangeText={(text) => setData({...data, price: text})}
                />

                <TouchableOpacity
                    onPress={() => setIngredientes(!ingredientes)}
                    style={styles.containerButtonAddIngredients}
                >
                    <Text style={styles.textAddIngredients}>Adicionar ingrediente</Text>
                    <Text style={styles.textAddIngredients}>+</Text>
                </TouchableOpacity>
               
               {data.ingredients.length > 0 &&
                    <View style={styles.containerIngredients}>
                        <Text>Ingredientes</Text>
                        <Text>Quantidades</Text>
                        <Text>Custo R$</Text>
                    </View>
               }
                <FlatList 
                    data={data.ingredients}
                    extraData={updateList}
                    renderItem={({item}) => (
                        <View style={styles.containerIngredients}>
                            <Text>{item.name}</Text>
                            <Text>{item.quantity}</Text>
                            <Text>{item.cost}</Text>
                        </View>
                        )}
                    />

                {
                    ingredientes ?
                    <>
                        <Input 
                            value={ingrediente}
                            placeHolder='Nome'
                            onChangeText={(text) => setIngrediente({...ingrediente,
                                name: text,
                            })}
                        />
                        <Input 
                            value={ingrediente}
                            keyboardType='numeric'
                            placeHolder='Custo'
                            onChangeText={(text) => setIngrediente({...ingrediente,
                                cost: text,
                            })}
                        />
                        <View style={{
                            alignItems: 'center'
                        }}>
                            <Text>Quantidade</Text>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <TouchableOpacity
                                    onPress={() => setIngrediente({...ingrediente, quantity: ingrediente.quantity - 1})}
                                >
                                    <Text style={{
                                        fontSize: 80
                                    }}>-</Text>
                                </TouchableOpacity>
                                    <Text style={{
                                        fontSize: 80,
                                        paddingHorizontal: 20
                                    }}>{ingrediente.quantity}</Text>
                                <TouchableOpacity
                                    onPress={() => setIngrediente({...ingrediente, quantity: ingrediente.quantity + 1})}
                                >
                                    <Text style={{
                                        fontSize: 80
                                    }}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <Button
                            title="Adicionar"
                            onPress={saveIngrediente}
                            backgroundColor={colors.green}
                        />
                    </>
                    :
                    null
                }
                <Button
                    title="Salvar"
                    onPress={handleCreateItem}
                    backgroundColor={colors.green}
                />
        </View>
        </ScrollView>
    )
}

export default CreateItem;