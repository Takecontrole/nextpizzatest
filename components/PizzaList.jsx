import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"
import stylesC from "../styles/PizzaCard.module.css";
import Link from "next/link";
const PizzaList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>El RICO GUSTO</h1>
      <p className={styles.desc}>
        Мы делаем вкусную пиццу из высококачественной продукции, чтобы вы могли наслаждаться сочетанием приготовленной профессиональными поворами пиццей и тщательно отобранных ингредиентов.
      </p>
      
      <div className={styles.wrapper}>
          <div className={stylesC.container}>
             <Link href="/product/1">
      <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/5907951b8bf848b2b3bf0ead39b84ab1_760x760.webp" alt="" width="500" height="500" />
      </Link>
      <h1 className={stylesC.title}>Аррива!</h1>
      <span className={stylesC.price}>₽490.00</span>
      <p className={stylesC.desc}>
        Цыпленок, острая чоризо, соус бургер, сладкий перец, красный лук, томаты, моцарелла, соус ранч, чеснок
      </p>
    </div>
  
    
   
          <div className={stylesC.container}>
             <Link href="/ninjas">
      <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/2676fc1086464a26801a852a702f5d78_760x760.webp" alt="" width="500" height="500" />
      </Link>
      <h1 className={stylesC.title}>El rico</h1>
      <span className={stylesC.price}>₽500</span>
      <p className={stylesC.desc}>
        Бекон, митболы, пикантная пепперони, моцарелла, томаты, шампиньоны, сладкий перец, красный лук, чеснок, фирменный томатный соус
      </p>
    </div>
    
     
          <div className={stylesC.container}>
             <Link href="/product/1">
      <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/45cc8ffb190c4a28aaf1863a67f675c7_760x760.webp" alt="" width="500" height="500" />
      </Link>
      <h1 className={stylesC.title}>Цыплёнок барбекю</h1>
      <span className={stylesC.price}>₽590</span>
      <p className={stylesC.desc}>
        Цыпленок, бекон, соус барбекю, красный лук, моцарелла, фирменный томатный соус
      </p>
    </div>
    
     
          <div className={stylesC.container}>
             <Link href="/product/1">
      <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/50555f951a6d4fd4ac0088c099eb3769_760x760.webp" alt="" width="500" height="500" />
      </Link>
      <h1 className={stylesC.title}>Четыре сыра</h1>
      <span className={stylesC.price}>₽399.90</span>
      <p className={stylesC.desc}>
        Сыр блю чиз, смесь сыров чеддер и пармезан, моцарелла, фирменный соус альфредо

      </p>
    </div>
    
     
          <div className={stylesC.container}>
             <Link href="/product/1">
      <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/03c840b1ab6f4ccb84f5dc167e146598_760x760.webp" alt="" width="500" height="500" />
      </Link>
      <h1 className={stylesC.title}>Диабло</h1>
      <span className={stylesC.price}>₽699.90</span>
      <p className={stylesC.desc}>
        Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла, фирменный томатный соус

      </p>
    </div>
    
    
          <div className={stylesC.container}>
             <Link href="/product/1">
      <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/b8880e1ce9b84e78aa3004d5b86d5bf9_760x760.webp" alt="" width="500" height="500" />
      </Link>
      <h1 className={stylesC.title}>Двойной пепперони</h1>
      <span className={stylesC.price}>₽499.90</span>
      <p className={stylesC.desc}>
      Двойная порция пикантной пепперони, увеличенная порция моцареллы, фирменный томатный соус

      </p>
    </div>
    </div>
       
      </div>
   
  );
};

export default PizzaList;
