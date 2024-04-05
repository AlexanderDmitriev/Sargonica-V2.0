import { Switcher, Circle } from './CustomSwitcher.styled';

export const CustomSwitcher = () => {
  return (
    <Switcher
      /* onChange={handleChangeTheme}
          checked={isDarkTheme} */
      offColor={`#FBFCFE`}
      onColor={`#191924`}
      onHandleColor={`#FBFCFE`}
      offHandleColor={`#191924`}
      checkedIcon={false}
      uncheckedIcon={false}
      height={24}
      width={56}
      borderRadius={40}
      handleDiameter={17}
      checkedHandleIcon={<Circle />}
      uncheckedHandleIcon={<Circle />}
    />
  );
};
