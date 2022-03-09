import { Typography, Stack } from "@mui/material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory()

  const cart = useSelector(store => store.cart)
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
    
  }));
  return (
    <Stack
    direction='row'
    justifyContent={"space-between"}
    maxWidth='1200px'
    margin='0 auto'
    padding='24px 0'
    >
      <Typography variant="h4" align="left" onClick={() => history.push('/store')}>
        Loja do Kassinão
      </Typography>
      <Link to='/cart'>
      <IconButton aria-label="cart" sx={{borderRadius: '50%', width: '50px'}}>
        <StyledBadge badgeContent={cart.length} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      </Link>
    </Stack>
  );
};

export default Header;
