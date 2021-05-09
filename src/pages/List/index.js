import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Alert,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Input, Button} from '../../components';
import api from '../../services/api';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {CardList} from '../../components';
import colors from '../../utils/colors';

function List({navigation}) {
  const {token, user} = useSelector(store => store.user);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalpages, setTotalPages] = useState(0);
  const [control, setControl] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [error, setError] = useState(false);
  const [loadingMore, setLoadingMore] = useState(true);
  var page = 0;

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadList();
    });

    return unsubscribe;
  }, [navigation]);

  const loadList = () => {
    setRefresh(true);

    if (page < totalpages) {
      page = page + 1;
      console.log('estou aqui', page);
    }

    console.log(token)

    api
      .get(`product/list?page=${page}`, {
        headers: {
          authorization: token,
        },
      })
      .then(resp => {
        setCurrentPage(resp.data.pageable.pageNumber);
        page = resp.data.pageable.pageNumber;
        setTotalPages(resp.data.totalPages);

        if (page !== 0) {
          let fffffff = items;
          let tempsef = resp.data.content;
          let last = tempsef.concat(fffffff);
          setItems(last);
        } else {
          setItems(resp.data.content);
        }

        setLoadingMore(false);
        setControl(!control);
      }).finally(() => {
        setRefresh(false);
      });
  };

  const handleCreateItem = () => {
    navigation.navigate('createItem');
  };

  const handleDeleteItem = item => {
    api
      .delete(`product/delete/${item.id}`, {
        headers: {
          authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMTciLCJleHAiOjE2MjA2MDQ4OTcsImlhdCI6MTYyMDU2MTY5N30.gRSJlVJR3DyKGKK1vwtmEcy-fQVLM_8obvfo5ZkpurD-8ij2Rnxredj8mIhIaMAzSVEk3v6mxlscqf-6fFxvyw`,
        },
      })
      .then(resp => {
        loadList();
        console.log('item deletado');
      });

    for (var i = 0; i < items.length; i++) {
      if (items[i].id === item.id) {
        items.splice(i, 1);
      }
    }
  };

  const chegandoNoFinal = () => {
    loadList();
  };

  const handleEdit = item => {
    navigation.navigate('createItem', item);
  };

  return (
    <>
      <View
        style={styles.header}>
        <Text style={styles.textHeader}>Olá {user}, Bem vindo!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('home')}>
          <Icon name="log-out" size={24} color={colors.delete} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {items.length === 0 && !loading ? (
          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Text>Nada encontrado</Text>
          </View>
        ) : null}
        <FlatList
          data={items}
          onEndReached={() => chegandoNoFinal()}
          onEndReachedThreshold={0.5}
          extraData={control}
          refreshing={refresh}
          onRefresh={loadList}
          renderItem={({item}) => (
            <CardList
              title={item.name}
              price={item.price}
              ingredients={item.ingredients}
              onPressX={() => handleDeleteItem(item)}
              onPressEdit={() => handleEdit(item)}
            />
          )}
          ListFooterComponent={
            loadingMore ? (
              <ActivityIndicator color={colors.green} size={30} />
            ) : (
              <></>
            )
          }
        />
      </View>
      <Button
        title="Adicionar item"
        onPress={handleCreateItem}
        backgroundColor={colors.green}
      />
    </>
  );
}

export default List;
