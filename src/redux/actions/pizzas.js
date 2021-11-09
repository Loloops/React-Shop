export const setPizzas = (items) => ({
  //ActionCreator засовываем данные, далее благодаря dispatch превращаем это все в объект action
  type: 'SET_PIZZAS',
  payload: items,
});
