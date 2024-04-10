import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import CircleIcon from '@mui/icons-material/Circle';
import VolumeUp from '@mui/icons-material/VolumeUp';

export const ArrowSlider = () => {
  const [value, setValue] = React.useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Box sx={{ width: 400 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <CircleIcon />
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        <VolumeUp />
      </Stack>
    </Box>
  );
}
