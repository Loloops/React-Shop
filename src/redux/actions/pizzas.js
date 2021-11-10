import axios from 'axios';

export const setPizzas = (items) => ({
  //ActionCreator засовываем данные, далее благодаря dispatch превращаем это все в объект action
  type: 'SET_PIZZAS',
  payload: items,
});

export const fetchPizzas = () => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get('http://localhost:3001/pizzas').then(({ data }) => {
    dispatch(setPizzas(data));
  });
};

export const setLoaded = (val) => ({
  type: 'SET_LOADED',
  payload: val,
});
