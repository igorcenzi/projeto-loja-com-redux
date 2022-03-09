import { Fab, Typography } from "@mui/material"
import { StyledCartItem } from "./StyledCartItem"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from "react-redux";
import { decrementItemThunk, incrementItemThunk, removeProductThunk } from "../../store/modules/cart/thunks";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';



const CartItem = ({product}) => {
  const cart = useSelector(store => store.cart)
  const dispatch = useDispatch()

  const handleAddItem = (e) => {
    console.log(e)
    e.preventDefault()
    dispatch(incrementItemThunk(product, cart))
  }

  const handleDecrementItem = (e) => {
    e.preventDefault()
    dispatch(decrementItemThunk(product, cart))
  }

  const handleRemoveItem = (e) => {
    e.preventDefault()
    dispatch(removeProductThunk(product, cart))
  }

  return(
    <StyledCartItem>
      <img src={product.image}></img>
      <Typography variant="h3">R$ {(product.price * product.quantity).toFixed(2)}</Typography>
      <div>
      <Fab color="primary" aria-label="add" size='small' onClick={(e) => {
        e.preventDefault()
        handleAddItem(e)
      }
      }>
        <AddIcon />
      </Fab>
      <h2>{product?.quantity}</h2>
      <Fab color="secondary" aria-label="add" size='small' onClick={(e) => handleDecrementItem(e)}>
        <RemoveIcon />
      </Fab>
      <Fab color="secondary" aria-label="add" size='small' onClick={(e) => handleRemoveItem(e)}>
        <DeleteOutlineIcon onClick={(e) => handleRemoveItem(e)}/>
      </Fab>
      </div>
    </StyledCartItem>
  )
}

export default CartItem