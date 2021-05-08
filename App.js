import React from 'react';
import Routes from './src/routes';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './src/store/index';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Routes />
      </PersistGate>
    </Provider>
  )
}

export default App;
