import { useDispatch } from 'react-redux';
import dataClothes from '../../Data/dataClothes'
import { removeItemFromCart } from '../../redux/cartSlice';

const CartItem = ({cartItem}) => {

    console.log(cartItem)
    const clothes = dataClothes.find(item => item.id === cartItem.clothesId) 
    const dispatch = useDispatch()
    console.log(clothes);

    return (
        <div>
            <p>{clothes.name}</p>
            <p>Quantity: {cartItem.quantity}</p>
            <p>Price: ${clothes.price * cartItem.quantity}</p>
            <p className='delivery'>FREE delivery <strong>Sep 25-27</strong></p>
            <p className='blue'>In Stock</p>
            <button onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>Remove</button>
        </div>
    )
}

export default CartItem