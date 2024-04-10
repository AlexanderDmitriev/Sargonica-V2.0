import FormControlLabel from '@mui/material/FormControlLabel';
import { IOSSwitch } from './CustomSwitcher.styled';

export const CustomSwitcher = () => {
  return (
    <FormControlLabel
      control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
      label=""
    />
  );
};
