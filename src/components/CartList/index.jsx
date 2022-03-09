import { Box } from "@mui/system"
import { useDispatch, useSelector } from "react-redux"
import CartItem from "../CartItem"
import DeleteOutlineIcon from '@mui/icons-material/Delete';
import { Fab, Typography } from "@mui/material";
import { removeAllThunk } from "../../store/modules/cart/thunks";



const CartList = () => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const removeAllItems = () => {
    dispatch(removeAllThunk())
  }

  return(
    <Box maxWidth={1200} margin={'0 auto'} maxHeight={'800px'}>
      {cart.length === 0 ? <Typography variant="h4">Ooops, parece que você não possui itens no carrinho ainda...</Typography>
      :
      <>
      <Fab variant="extended" onClick={() => removeAllItems()}>
  <DeleteOutlineIcon sx={{ mr: 1 }} />
  Remover Todos
</Fab>
  {cart.map((item, index) => <CartItem product={item} key={index}/>)}
  <Typography align="right">Valor total: R$ {cart.reduce((acc, item) => (item.price * item.quantity) + acc, 0).toFixed(2)}</Typography>
      </>
      }
    </Box>
  )
}

export default CartList