import React from 'react';
import Routes from './src/routes';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './src/store/index';
import colors from './src/utils/colors';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <StatusBar 
          barStyle="light-content"
          backgroundColor={colors.green}
        />
        <Routes />
      </PersistGate>
    </Provider>
  )
}

export default App;
