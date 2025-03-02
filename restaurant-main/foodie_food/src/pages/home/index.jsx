import { useEffect, useState } from "react";
import Header from "../../component/header";
import {menu as data} from "../../data/data"
import styles from "./index.module.css";

const Home = (props) => {
    const {setOrders} = props;
    const [orderItem,setOrderItem] = useState({
        id:"",
        name:"",
        price:"",
        imgSrc:""
    });

    useEffect(() => {
        if (orderItem.id) {
          setOrders((prevOrders) => [...prevOrders, orderItem]);
          setOrderItem({ id: "", name: "", price: "", imgSrc: "" }); 
        }
    }, [orderItem, setOrders]);

    const additem = (item)=>{
        setOrderItem({
            id:item.id,
            name:item.name,
            price:item.price,
            imgSrc:item.imgSrc
        });
    }
    return(  
        <>
        <Header/>
        <div className={styles.body}>
            <div className={styles.hero_banner}>
                <img className={styles.banner} src="https://s3-alpha-sig.figma.com/img/bfaa/d74b/76ba1256d10f8af33fd5e08b7574087c?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Vfi~xi7NFDmuHNU9Rq5iHQb5O~0r8UKnhV~nte6G0eBM3HxHwKRW5qLu2M3vFE7vs~MoS-3XgNND9-wJVIhIj2E6DWUqQc6wq7yv0oPrNeh-GJl965WFGS8UxNc4rvGV8CCFVIVprJ60MnsiLEqyl4CDZHyIGQijzuBQfLGQKFmpFkx9JbNs0WriS~-FJcFz0Rfqmr9TlaCcfQIvsKuDn9GW8zJG6ujkkVSQGJQlwN3Oh9eOO0NgmHxHF0ax9STe5au3GiOhsrY1JmHsdhA26OAcBh49BX85bNKEq67L0sRnWU-b~2h3sxHuHT1~LfI~BdPe7ep8uLYTbEV79WnWwA__"></img>
            </div>
            <div className={styles.menu}>
                <h4>Menu</h4>
                <div className={styles.menuContainer}>
                    {data.map((item)=>(
                        <div key={item.id} className={styles.menuItem}>
                            <div className={styles.imageConatiner}>
                            <img className={styles.menuItemImg} src={item.imgSrc} alt="iamge"></img>
                            </div>
                            <div className={styles.name_price_add}>
                                <div className={styles.name_price}>
                                    <p className={styles.name}>{item.name}</p>
                                    <p>${item.price}/-</p>
                                </div>
                                <button className={styles.add} onClick={()=> additem(item)}>+</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;