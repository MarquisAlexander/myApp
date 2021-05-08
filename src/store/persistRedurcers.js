import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user', 'radar'],
};

export default (reducers) => {
  const persistedReducer = persistReducer(persistConfig, reducers);
  return persistedReducer;
};