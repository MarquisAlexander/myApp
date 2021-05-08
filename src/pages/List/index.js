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
import { color } from 'react-native-reanimated';
import colors from '../../utils/colors';

function List({navigation}) {
  const { token } = useSelector(store => store.user);
  const [items, setItems] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalpages, setTotalPages] = useState(0);
  const [control, setControl] = useState(false);
  var page = 0;

    useEffect(() => {
        loadList();
    }, [])

    const loadList = () => {
        if (page < totalpages) {
            page = page + 1
            console.log('estou aqui',page)
            setCurrentPage(page)
        }

        console.log('prestes a fazer a consulta', page)

        api
            .get(`product/list?page=${page}`, {
                headers: {
                    authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMTciLCJleHAiOjE2MjA1Mjg0MTgsImlhdCI6MTYyMDQ4NTIxOH0.2ppNusxsbQ1in1PYLuRPPkVtQ37kYuA2ieK6Leg9LpGNEMbW8gUvsBYHhDuME5akExn4IS5s660vnbLGFneZeQ`
                }
            })
            .then((resp) => {
                setCurrentPage(resp.data.pageable.pageNumber)
                page = resp.data.pageable.pageNumber
                setTotalPages(resp.data.totalPages)

                if (page !== 0) {
                    console.log('antes',items)
                    items.push(resp.data.content)
                    console.log('depois',items)
                    setControl(!control)
                } else {
                    setItems(resp.data.content)
                }
            })

    }

    const handleCreateItem = () => {
        navigation.navigate('createItem')
    }

    const handleDeleteItem = (item) => {
        console.log('deletar esse', item.id);
        api
            .delete(`product/delete/${item.id}`, {
                headers: {
                    authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMTciLCJleHAiOjE2MjA1Mjg0MTgsImlhdCI6MTYyMDQ4NTIxOH0.2ppNusxsbQ1in1PYLuRPPkVtQ37kYuA2ieK6Leg9LpGNEMbW8gUvsBYHhDuME5akExn4IS5s660vnbLGFneZeQ`
                }
            })
            .then((resp) => {
                loadList();
                console.log('item deletado')
            })
    }

    const chegandoNoFinal = () => {
        loadList();
    }

    return (
        <>
            <View style={styles.container}>
                <FlatList 
                    data={items}
                    onEndReached={() => chegandoNoFinal()}
                    onEndReachedThreshold={0.5}
                    extraData={control}
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
                backgroundColor={colors.green}
            />
        </>
    )
}

export default List;