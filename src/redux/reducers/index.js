import pizzasReducer from './pizzas';
import filtersReducer from './filters';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  filters: filtersReducer,
});
//Каждый из редюсеров содержить опр. проверку на прокинутый action и действия на этот action

export default rootReducer;
