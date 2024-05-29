import style from "../ProductInfo.module.css"
import productC from "../../images/Product C.JPG"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {actionInfo} from "../../redux/action";

const ProductCInfo = () => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.productReducer.product);

    const navToCart = (event) => {
        dispatch(actionInfo.setCart(product));
        event.currentTarget.disabled = true;
    }


    return (
        <div className={style.container}>
            <div className={style.photoBlock}>
                <img src={product.image} alt="img"/>
            </div>
            <div className={style.product}>
                <div className={style.productInfo}>
                    <h1 id={"name"}>{product.name}</h1>
                    <h3>Price:</h3>
                    <h3 id={"price"}>{product.price}</h3>
                    <h5>SIZE:</h5>
                    <div className={style.sizePanel}>
                        <input type="button" value="S" className={style.sizeButton}/>
                        <input type="button" value="M" className={style.sizeButton}/>
                        <input type="button" value="L" className={style.sizeButton}/>
                        <input type="button" value="XL" className={style.sizeButton}/>
                    </div>
                    
                    <input className={style.orderButton} type="button" value="ORDER" id={"order"} onClick={navToCart}/>
                </div>
            </div>
        </div>
    );
}
export default ProductCInfo;