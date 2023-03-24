import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Admin.module.css";
import Add from "../../components/Add";
import AddButton from "../../components/AddButton";

const Index = ({ orders, products }) => {
  const [close, setClose] = useState(true);
  const [pizzaList, setPizzaList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const status = ["подготовkа", "в пути", "доставлено"];

  

  

  return (
    <div className={styles.container}>
          <div className={styles.addbutton}>
         {<AddButton setClose={setClose} />}
        {!close && <Add setClose={setClose} />}
       </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Товары</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Фото</th>
              <th>Id</th>
              <th>Название</th>
              <th>Цена</th>
              <th>Действие</th>
            </tr>
          </tbody>
          {pizzaList.map((product) => (
            <tbody key={product._id}>
              <tr className={styles.trTitle}>
                <td>
                  <Image
                    src={product.img}
                    width={50}
                    height={50}
                    objectFit="cover"
                    alt=""
                  />
                </td>
                <td>{product._id.slice(0, 5)}...</td>
                <td>{product.title}</td>
                <td>{product.prices[0]}</td>
                <td>
                  <button className={styles.button}>Ред.</button>
                  <button
                    className={styles.button}
                    
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Заказы</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Покупатель</th>
              <th>Итог</th>
              <th>Оплата</th>
              <th>Статус</th>
              <th>Действие</th>
            </tr>
          </tbody>
          {orderList.map((order) => (
            <tbody key={order._id}>
              <tr className={styles.trTitle}>
                <td>{order._id.slice(0, 5)}...</td>
                <td>{order.customer}</td>
                <td>{order.total}</td>
                <td>
                  {order.method === 0 ? <span>наличными</span> : <span>картой</span>}
                </td>
                <td>{status[order.status]}</td>
                <td>
                  <button >
                    След. этап
                  </button>
                   <button
                    className={styles.button}
                    
                  >
                    Удалить
                  </button>
                </td>
              </tr>
               <tr className={styles.trTitle}>
               <td>{order.address}</td>
               </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};
/*
export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  const productRes = await axios.get("http://localhost:3000/api/products");
  const orderRes = await axios.get("http://localhost:3000/api/orders");

  return {
    props: {
      orders: orderRes.data,
      products: productRes.data,
    },
  };
};
*/
export const getStaticProps = async () => {
  const productsRes = await fetch('https://pizza-fake.adaptable.app/products');
  const ordersRes = await fetch('https://pizza-fake.adaptable.app/orders');
 const products = await productsRes.json();
 const orders = await ordersRes.json();
  return {
    props: {
      products, orders
    },
  }
}

export default Index;
