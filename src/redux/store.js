import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(
  rootReducer, //Наш combineReducer
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), //для связи с расширением в браузере
);

export default store;
