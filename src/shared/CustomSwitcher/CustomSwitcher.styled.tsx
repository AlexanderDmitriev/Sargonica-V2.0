import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

export const IOSSwitch = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 48,
    height: 22,
    padding: 0,
    overflow: 'visible',
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(22px)',
        color: '#FBFCFE',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#418b77' : 'transparent',
          opacity: 1,
          border: '2px solid #418b77',
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#418b77',
        border: '6px solid #418b77',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
      border:'6px solid #191924',
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      border: '2px solid #418b77',
      backgroundColor: theme.palette.mode === 'light' ? 'transparent' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));