import style from "./PLP.module.css"
import React, {useEffect} from 'react'
import productA from "../images/Product A.JPG"
import productB from "../images/Product B.JPG"
import productC from "../images/Product C.JPG"
import productD from "../images/Product D.JPG"
import productE from "../images/Product E.JPG"
import productF from "../images/Product F.PNG"
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {RouteConst} from "../common/RouteConst/RouteConst";
import {actionInfo} from "../redux/action";

const PLP = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

     const obj = {
        productA: {
            id: 1,
            name: "Hound shorts SS23",
            price: "$50.00",
            image: productA,
            qty: 1
        },
        productB: {
            id: 2,
            name: "Hound pants SS23",
            price: "$40.00",
            image: productB,
            qty: 1
        },
        productC: {
            id: 3,
            name: "Hound shorts SS24",
            price: "$30.00",
            image: productC,
            qty: 1
        },
        productD: {
            id: 4,
            name: "Hound pants SS24",
            price: "$20.00",
            image: productD,
            qty: 1
        },
        productE: {
            id: 5,
            name: "Hound pants SS25",
            price: "$10.00",
            image: productE,
            qty: 1
        },
        productF: {
            id: 6,
            name: "Hound pants SS26",
            price: "$60.00",
            image: productF,
            qty: 1
        }
    }

    useEffect(() => {
        document.querySelector("#productBlockA").addEventListener("click", function handleClick() {
            dispatch(actionInfo.setProductInfo(obj.productA))
            navigate(RouteConst.ProductAInfo)
        })
        document.querySelector("#productBlockB").addEventListener("click", function handleClick() {
            dispatch(actionInfo.setProductInfo(obj.productB));
            navigate(RouteConst.ProductBInfo)
        })
        document.querySelector("#productBlockC").addEventListener("click", function handleClick() {
            dispatch(actionInfo.setProductInfo(obj.productC));
            navigate(RouteConst.ProductCInfo)
        })
        document.querySelector("#productBlockD").addEventListener("click", function handleClick() {
            dispatch(actionInfo.setProductInfo(obj.productD));
            navigate(RouteConst.ProductDInfo)
        })
        document.querySelector("#productBlockE").addEventListener("click", function handleClick() {
            dispatch(actionInfo.setProductInfo(obj.productE));
            navigate(RouteConst.ProductEInfo)
        })
        document.querySelector("#productBlockF").addEventListener("click", function handleClick() {
            dispatch(actionInfo.setProductInfo(obj.productF));
            navigate(RouteConst.ProductFInfo)
        })
    }, [])

    return(
        <div className={style.container}>
            <div className={style.block}>
                <h1>Hound emp</h1>
                <div className={style.products}>
                    <div className={style.productBlock} id={"productBlockA"}>
                        <img src={obj.productA.image} alt="product"/>
                        <div>
                            <p>{obj.productA.name}</p>
                            <h4>{obj.productA.price}</h4>
                        </div>

                    </div>
                    <div className={style.productBlock} id={"productBlockC"}>
                        <img src={obj.productC.image} alt="product"/>
                        <div>
                            <p>{obj.productC.name}</p>
                            <h4>{obj.productC.price}</h4>
                        </div>

                    </div>
                    <div className={style.productBlock} id={"productBlockD"}>
                        <img src={obj.productD.image} alt="product"/>
                        <div>
                            <p>{obj.productD.name}</p>
                            <h4>{obj.productD.price}</h4>
                        </div>

                    </div>
                    <div className={style.productBlock} id={"productBlockB"}>
                        <img src={obj.productB.image} alt="product"/>
                        <div>
                            <p>{obj.productB.name}</p>
                            <h4>{obj.productB.price}</h4>
                        </div>

                    </div>
                    <div className={style.productBlock} id={"productBlockE"}>
                        <img src={obj.productE.image} alt="product"/>
                        <div>
                            <p>{obj.productE.name}</p>
                            <h4>{obj.productE.price}</h4>
                        </div>
                        </div>
                    <div className={style.productBlock} id={"productBlockF"}>
                        <img src={obj.productF.image} alt="product"/>
                        <div>
                            <p>{obj.productF.name}</p>
                            <h4>{obj.productF.price}</h4>
                        </div>
                    </div>
                </div>
            </div>

    </div>
    )

}


export default PLP
