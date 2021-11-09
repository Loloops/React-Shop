import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';
import axios from 'axios';
import { setPizzas } from './redux/actions/pizzas';
import { connect } from 'react-redux';

function App({ items, setPizzas }) {
  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setPizzas(data.pizzas);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home items={items} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  //Вытащить из всего state опр. данные и закинуть их в props
  return {
    items: state.pizzas.items,
  };
};

const mapDispatchToProps = {
  //Пропихнуть actionCreator в  props и вызывать их без dispatch
  setPizzas,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
