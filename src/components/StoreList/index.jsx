import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import CardProduct from "../CardProduct";

const StoreList = () => {

  const productList = useSelector(state => state.productList)

  return(
    <Stack 
    direction="row"
    justifyContent="flex-start"
    alignItems="center"
    gap={'20px'}
    flexWrap='wrap'
    margin='0 auto'
    maxWidth='1200px'
    sx={{
      backgroundColor: "linear-gradient(90deg, rgba(157,148,16,1) 18%, rgba(131,7,161,1) 84%)"
    }}
  >
        {productList.map((product, index) => <CardProduct product={product} key={index}/>)}
    </Stack>
  )
}

export default StoreList