import { useEffect, useState } from "react";
import Header from "../../component/header";
import styles from "./index.module.css";

const YourOrder = (props)=>{
    const [totalPrice, setTotalPrice] = useState(0);
    const {orders,setOrders} = props;
    const removeItem = (itemToRemove) =>{
        const updatesOrders = orders.filter(item=> item.id !== itemToRemove.id);
        setOrders(updatesOrders);
    }
    const totalprice = () =>{
        const tPrice =  orders.reduce((acc,item)=> acc + item.price,0)
        setTotalPrice(tPrice);
    }
    useEffect(()=>{
        totalprice();
    },[orders]);

    const TakeOrder = ()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(orders);
            },2500);
        });
    };
    const orderprep = () =>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve({order_status:true,paid:false});
            },1500);
        });
    };
    const payOrder =() =>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve({order_status:true,paid:true});
            },1000);
        });
    };
    const thankyouFnc = () => {
        alert("Thank you for eating with us today!");
    }

    const orderItem = async () => {
        try{
            await TakeOrder();
            const prepStaus = await orderprep();
            const payStatus = await payOrder();
            if(payStatus.paid){
                thankyouFnc();
            }
        }catch(error){
            console.error("Error while processing the order:", error);
        }
    }

    return(
        <>
            <Header/>
            <div className={styles.body}>
                <h2>Your Orders</h2>
                <div className={styles.menuContainer}>
                    {orders.map((item)=>(
                    <div key={item.id} className={styles.menuItem}>
                        <div className={styles.imageConatiner}>
                            <img className={styles.menuItemImg} src={item.imgSrc} alt="iamge"></img>
                        </div>
                        <div className={styles.name_price_add}>
                            <div className={styles.name_price}>
                                <p className={styles.name}>{item.name}</p>
                                <p>${item.price}/-</p>
                            </div>
                            <button className={styles.add} onClick={()=> removeItem(item)}>-</button>
                        </div>
                    </div>
                    ))}
                </div>
                <div className={styles.finalOrder}>
                    <p className={styles.totalPrice}>Total Price : {totalPrice}</p>
                    <button className={styles.orderBtn} onClick={orderItem}>Place Order</button>
                </div>
            </div>
        </>
    )
}

export default YourOrder;