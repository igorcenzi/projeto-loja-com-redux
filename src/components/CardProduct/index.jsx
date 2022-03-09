import { Fab, Typography, CardMedia, CardContent, CardActions, Card } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import { addCartThunk } from '../../store/modules/cart/thunks';



const CardProduct = ({product}) => {
  const dispatch = useDispatch()
  const cart = useSelector(store => store.cart)

  const handleAddCart = () => {
    dispatch(addCartThunk(product, cart))
  }

  return (
    <Card sx={{ width: 345, height: 370, position: 'relative'}}>
    <CardMedia
      component="img"
      height="200"
      image={product.image}
      alt={product.name}
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div" align='left'>
      {product.name}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" align='left'>
        R$ {product.price.toFixed(2)}
      </Typography>
    </CardContent>
    <CardActions>
     <Fab color='primary' sx={{position: 'absolute', bottom: 12, right: 12}} onClick={() => handleAddCart()}>
       <AddShoppingCartIcon/>
     </Fab>
    </CardActions>
  </Card>
  )
}
export default CardProduct