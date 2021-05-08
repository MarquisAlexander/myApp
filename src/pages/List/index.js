import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    Alert,
    FlatList,
    TouchableOpacity
} from 'react-native';
import {Input, Button} from '../../components';
import api from '../../services/api';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import {CardList} from '../../components';

function List({navigation}) {
  const { token } = useSelector(store => store.user);
  const [items, setItems] = useState();

  console.log('token user', token)

    useEffect(() => {
        api
            .get('product/list', {
                headers: {
                    authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMTciLCJleHAiOjE2MjA1Mjg0MTgsImlhdCI6MTYyMDQ4NTIxOH0.2ppNusxsbQ1in1PYLuRPPkVtQ37kYuA2ieK6Leg9LpGNEMbW8gUvsBYHhDuME5akExn4IS5s660vnbLGFneZeQ`
                }
            })
            .then((resp) => {
                // Alert.alert('Sucesso')
                console.log(resp.data.content)
                setItems(resp.data.content)
            })
    }, [])

    const handleCreateItem = () => {
        navigation.navigate('createItem')
    }

    const handleDeleteItem = (item) => {
        console.log('deletar esse', item.id);

        api
            .delete('product/delete', {
                params: {
                    id: item.id
                },
                headers: {
                    authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMTciLCJleHAiOjE2MjA1Mjg0MTgsImlhdCI6MTYyMDQ4NTIxOH0.2ppNusxsbQ1in1PYLuRPPkVtQ37kYuA2ieK6Leg9LpGNEMbW8gUvsBYHhDuME5akExn4IS5s660vnbLGFneZeQ`
                }
            })
            .then((resp) => {
                // Alert.alert('Sucesso')
                console.log('item deletado')
            })
    }

    return (
        <>
            <View style={styles.container}>
                <FlatList 
                    data={items}
                    renderItem={({item}) => (
                        <CardList 
                            title={item.name}
                            price={item.price}
                            ingredients={item.ingredients}
                            onPressX={() => handleDeleteItem(item)}
                        />
                    )}
                />

            </View>
            <Button
                title="Adicionar item"
                onPress={handleCreateItem}
                backgroundColor="green"
            />
        </>
    )
}

export default List;