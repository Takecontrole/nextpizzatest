import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
const Featured = () => {
  const [index, setIndex] = useState(0);
  const imgs = [
    "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  ];

  const handleArrow = (direction) =>{
      if(direction==="l"){
          setIndex(index !== 0 ? index-1 : 2)
      }
      if(direction==="r"){
          setIndex(index !== 2 ? index+1 : 0)
      }
  }

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
       <AiOutlineArrowLeft />
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {imgs.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <AiOutlineArrowRight />
      </div>
    </div>
  );
};

export default Featured;
