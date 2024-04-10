import IconButton from '@mui/material/IconButton';
import basket from '../../images/basket2.svg';

export const BasketButtonMUI = () => {
  return (
    <IconButton color="primary" aria-label="add to the basket">
      <img src={String(basket)} alt="basket"></img>
    </IconButton>
  );
};
