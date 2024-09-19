import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";

const Cloth = ({clothes}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()
    
    return (<div className="gallery">
            <img src={`./${clothes.img}.jpg`}/>
            <h2>{clothes.name}</h2>    
            <p>${clothes.price}</p>
            <p className='delivery'>FREE delivery <strong>Sep 25-27</strong></p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
            <button onClick={() => {dispatch(addItemToCart({clothes, quantity}))
            }}>Add to cart</button>
        </div>)
}

export default Cloth;