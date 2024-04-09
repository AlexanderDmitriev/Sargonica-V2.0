import NativeSelect from '@mui/material/NativeSelect';

export const CustomSelectMUI = () => {
  return (
    <NativeSelect
      defaultValue={30}
      inputProps={{
        name: 'language',
        id: 'uncontrolled-native',
      }}
    >
      <option value={1}>UA</option>
      <option value={2}>EN</option>
      <option value={3}>RU</option>
    </NativeSelect>
  );
};
