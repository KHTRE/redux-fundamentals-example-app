import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension' 
import rootReducer from './reducer';
import { sayHiOnDispatch, includeMeaningOfLife } from './exampleAddons/enhancers';
import { print1, print2, print3, logger } from './exampleAddons/middleware'; 

let preloadedState;
const persistedTodosString = localStorage.getItem('todos');

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString)
  }
};

// const store = createStore(rootReducer, preloadedState);

// const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife)
// const store = createStore(rootReducer, preloadedState, composedEnhancer);

// const middlewareEnhancer = applyMiddleware(print1, logger);
// const store = createStore(rootReducer, middlewareEnhancer);

const composedEnhancer = composeWithDevTools(applyMiddleware(print1, logger))
const store = createStore(rootReducer, preloadedState, composedEnhancer);

export default store;