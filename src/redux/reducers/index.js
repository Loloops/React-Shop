import pizzasReducer from './pizzas';
import filtersReducer from './filters';
import cartReducer from './cart';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  filters: filtersReducer,
  cart: cartReducer,
});
//Каждый из редюсеров содержить опр. проверку на прокинутый action и действия на этот action

export default rootReducer;
