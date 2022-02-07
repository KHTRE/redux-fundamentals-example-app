import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import './api/server'
import { Provider } from 'react-redux';

import store from './store';

// console.log('initial state = ', store.getState());

// const unsucscribe = store.subscribe(() => {
//   console.log('state after dispatch = ', store.getState());
// });

// store.dispatch({
//   type: 'todos/todoAdded',
//   payload: 'Learn about actions'
// });
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about reducers' })
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about stores' })

// store.dispatch({ type: 'todos/todoToggled', payload: 0 })
// store.dispatch({ type: 'todos/todoToggled', payload: 1 })

// store.dispatch({ type: 'filters/statusFilterChanged', payload: 'Active' })

// store.dispatch({
//   type: 'filters/colorFilterChanged',
//   payload: { color: 'red', changeType: 'added' }
// })

// unsucscribe();

// store.dispatch({ type: 'todos/todoAdded', payload: 'Try creating a store' })


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
