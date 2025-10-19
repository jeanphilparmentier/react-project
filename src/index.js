import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { createStore } from 'redux'
import reducer from './store/reducer'
import { Provider } from 'react-redux'

const store = createStore(reducer)

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

// Prior to react v19
// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
