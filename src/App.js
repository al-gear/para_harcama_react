import { useEffect, useState } from 'react';
import Header from './components/Header';
import products from "./products.json"
import Product from './components/Product';
import Basket from "./components/Basket";

function App() {
  const [money, setMoney] = useState(1000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(basket.reduce((acc, item) => {
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    }, 0))

  }, [basket])

  return (
    <>
      <div className="reset"><button disabled={!total} onClick={() => setBasket([])}>hepsini sıfırla</button></div>
      <Header total={total} money={money} />
      <div className="container products">

        {products.map(product => (
          <Product product={product} total={total} money={money} basket={basket} setBasket={setBasket} key={product.id} />
        ))}
      </div>
      <Basket total={total} products={products} basket={basket} />


    </>
  );
}

export default App;
