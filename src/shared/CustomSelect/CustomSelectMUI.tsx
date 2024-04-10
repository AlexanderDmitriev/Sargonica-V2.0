import {CustomNativeSelect} from './CustomSelectMUI.styled';

export const CustomSelectMUI = () => {
  return (
    <CustomNativeSelect
      defaultValue={30}
      inputProps={{
        name: 'language',
        id: 'uncontrolled-native',
      }}
    >
      <option value={1}>UA</option>
      <option value={2}>EN</option>
      <option value={3}>RU</option>
    </CustomNativeSelect>
  );
};
