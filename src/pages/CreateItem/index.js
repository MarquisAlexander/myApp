import React, { useState, useEffect } from 'react';
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

const CreateItem = ({navigation, route}) => {
    const [ingredientes, setIngredientes] = useState(false);
    const [updateList, setUpdateList] = useState(false);
    const [control, setControl] = useState(false);

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

    console.log(route.params);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // setInfo()
        });
        
        return unsubscribe;
    }, [navigation])

        console.log('aqui')

        if (route.params && !control) {

            data.price = route.params.price.toString(),
            data.id = route.params.id,
            data.image = route.params.image,
            data.name = route.params.name,

            route.params.ingredients.map((item) => {

                ingrediente.id = item.id,
                ingrediente.cost = item.cost,
                ingrediente.name = item.name,
                ingrediente.quantity = item.quantity

                data.ingredients.push(ingrediente)

            })
            setControl(!control)

            console.log(data.ingredients)
        }

    const handleCreateItem = () => {
       console.log('dentro', data)
       
       api
       .post('product/save',data, {
           headers: {
            authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMTciLCJleHAiOjE2MjA2MDQ4OTcsImlhdCI6MTYyMDU2MTY5N30.gRSJlVJR3DyKGKK1vwtmEcy-fQVLM_8obvfo5ZkpurD-8ij2Rnxredj8mIhIaMAzSVEk3v6mxlscqf-6fFxvyw`
           }
       })
       .then((resp) => {
           console.log('produto cadastrado')
           Alert.alert('Sucesso')
           navigation.navigate('list');
       }).catch((err) => {
           Alert.alert('Erro ao salvar edição :(')
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
                    value={data.image}
                    placeHolder='Url imagem'
                    onChangeText={(text) => setData({...data, image: text})}
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