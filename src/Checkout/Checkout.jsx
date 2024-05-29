import style from "../Checkout/Checkout.module.css"

const Checkout = () => {
    let number;

    return (
        <div className={style.checkout}>
        <div className={style.container}>
            <h3>Your name:</h3>
            <input type="text" placeholder="name"/>
            <h3>Your email:</h3>
            <input type="text" placeholder="email"/>
            <h3>Your phone number:</h3>
            <input type="text" placeholder="phone number"/>
            <h3>Your address:</h3>
            <input type="text" placeholder="address"/>
            <button>Checkout</button>
        </div>
        </div>
    );
}
export default Checkout;
