import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../utils/colors';
import styles from './styles';
import { maskMoney } from '../../utils/formatPrice';

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
        <Text style={styles.text}>Preço: {maskMoney(price)}</Text>
      </View>

      <View style={styles.containerContent}>
        <Text style={styles.text}>Ingredientes</Text>
        <Text style={styles.text}>Quantidade</Text>
      </View>

      {ingredients.map(item => (
        <View style={styles.containerContent}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.text}>{item.quantity}</Text>
        </View>
      ))}

      <View
        style={{
          flexDirection: 'row',
          marginTop: 10
        }}>
        <TouchableOpacity
          onPress={onPressX}
          style={{
            backgroundColor: colors.delete,
            padding: 10,
            flex: 1,
            alignItems: 'center',
          }}>
          <Icon name="x" size={24} color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressEdit}
          style={{
            backgroundColor: colors.green,
            padding: 10,
            flex: 1,
            alignItems: 'center',
          }}>
          <Icon name="edit" size={24} color={colors.white} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
