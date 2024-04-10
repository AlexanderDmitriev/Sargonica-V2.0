import { CustomCheckbox } from './CheckBox.styled';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const Checkboxes = () => {
  return (
    <CustomCheckbox
      {...label}
      sx={{
        color: '#418b77',
        '&.Mui-checked': {
          color: '#418b77',
        },
      }}
    />
  );
};
