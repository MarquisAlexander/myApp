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
        const unsubscribe = navigation.addListener('focus', () => {
        loadList();
        });
        
        return unsubscribe;
    }, [navigation])

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
                    authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMTciLCJleHAiOjE2MjA2MDQ4OTcsImlhdCI6MTYyMDU2MTY5N30.gRSJlVJR3DyKGKK1vwtmEcy-fQVLM_8obvfo5ZkpurD-8ij2Rnxredj8mIhIaMAzSVEk3v6mxlscqf-6fFxvyw`
                }
            })
            .then((resp) => {
                setCurrentPage(resp.data.pageable.pageNumber)
                page = resp.data.pageable.pageNumber
                setTotalPages(resp.data.totalPages)

                if (page !== 0) {
                    if (page === totalpages - 1) {
                        return;
                    } else {
                        let fffffff = items;
                        let tempsef = resp.data.content;
                        console.log('um array',fffffff)
                        console.log('um array',fffffff.length)
                        console.log('outro array',tempsef)
                        console.log('outro array',tempsef.length)
                        let last =  tempsef.concat(fffffff);
                        console.log('depois',last.length)
                        setItems(last)
                    }
                } else {
                    setItems(resp.data.content)
                }

                setControl(!control)
            })

    }

    const handleCreateItem = () => {
        navigation.navigate('createItem')
    }

    const handleDeleteItem = (item) => {
        api
            .delete(`product/delete/${item.id}`, {
                headers: {
                    authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMTciLCJleHAiOjE2MjA2MDQ4OTcsImlhdCI6MTYyMDU2MTY5N30.gRSJlVJR3DyKGKK1vwtmEcy-fQVLM_8obvfo5ZkpurD-8ij2Rnxredj8mIhIaMAzSVEk3v6mxlscqf-6fFxvyw`
                }
            })
            .then((resp) => {
                loadList();
                console.log('item deletado');
            })

        for( var i = 0; i < items.length; i++){ 

            if ( items[i].id === item.id) { 
        
                items.splice(i, 1); 
            }
        
        }

    }

    const chegandoNoFinal = () => {
        loadList();
    }

    const handleEdit = (item) => {
        navigation.navigate('createItem', item)
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
                            onPressEdit={() => handleEdit(item)}
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