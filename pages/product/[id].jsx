import styles from "../../styles/Product.module.css";
import stylesC from "../../styles/PizzaCard.module.css";
import Image from "next/image";


const Product = () => {
  return (
       
       <div className={styles.container}>
      <div className={styles.left}>
         <div className={stylesC.container}>
             
      <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/5907951b8bf848b2b3bf0ead39b84ab1_760x760.webp" alt="" width="500" height="500" />
      

    </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>Аррива!</h1>
        <span className={styles.price}>₽490</span>
        <p className={styles.desc}>Цыпленок, острая чоризо, соус бургер, сладкий перец, красный лук, томаты, моцарелла, соус ранч, чеснок</p>
        <h3 className={styles.choose}>Выбери размер</h3>
        <div className={styles.sizes}>
          <div className={styles.size}>
            <img src="https://thumbs.dreamstime.com/b/pizza-vector-icon-italian-fast-food-cafe-logo-illustration-pizzeria-icon-pizza-vector-icon-italian-fast-food-cafe-logo-150445333.jpg" width="40" height="40"  alt="" />
            <span className={styles.number}>Маленькая</span>
          </div>
          <div className={styles.size}> 
            <img src="https://thumbs.dreamstime.com/b/pizza-vector-icon-italian-fast-food-cafe-logo-illustration-pizzeria-icon-pizza-vector-icon-italian-fast-food-cafe-logo-150445333.jpg" width="50" height="50" alt="" />
            <span className={styles.number}>Средняя</span>
          </div>
          <div className={styles.size}>
            <img src="https://thumbs.dreamstime.com/b/pizza-vector-icon-italian-fast-food-cafe-logo-illustration-pizzeria-icon-pizza-vector-icon-italian-fast-food-cafe-logo-150445333.jpg" width="56" height="60"  alt="" />
            <span className={styles.number}>Гигантская</span>
          </div>
        </div>
        <h3 className={styles.choose}>Выбери доролнительные ингредиенты</h3>
        <div className={styles.ingredients}>
 
            <div className={styles.option} key="1">
              <input
                type="checkbox"
                id="1"
                name="чесночный соус"
                className={styles.checkbox}
               
              />
              <label htmlFor="double">Чесночный соус</label>
            </div>
          
            <div className={styles.option} key="2">
              <input
                type="checkbox"
                id="2"
                name="Острый перец"
                className={styles.checkbox}
               
              />
              <label htmlFor="double">Острый перец</label>
            </div>
          
            <div className={styles.option} key="3">
              <input
                type="checkbox"
                id="3"
                name="Моцарелла"
                className={styles.checkbox}
               
              />
              <label htmlFor="double">Моцарелла</label>
            </div>
          
            <div className={styles.option} key="4">
              <input
                type="checkbox"
                id="4"
                name="Сырный бортик"
                className={styles.checkbox}
               
              />
              <label htmlFor="double">Сырный бортик</label>
            </div>
            <div className={styles.option} key="5">
              <input
                type="checkbox"
                id="5"
                name="Томаты"
                className={styles.checkbox}
               
              />
              <label htmlFor="double">Томаты</label>
            </div>
          
        
        </div>
        <div className={styles.add}>
            <input
            
            type="number"
            defaultValue={1}
            className={styles.quantity}
          />
            <button className={styles.button} >Добавить в корзину</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
