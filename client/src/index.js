import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './redux/store'
import * as serviceWorker from './serviceWorker'

import App from './App'


const app = (
  <Provider store={store} >
    <BrowserRouter>
      <PersistGate persistor={persistor} >
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
)

render(app, document.getElementById('root'))
serviceWorker.register()


