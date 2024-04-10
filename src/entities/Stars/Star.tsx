import * as React from 'react';
import Rating from '@mui/material/Rating';
import styled from '@emotion/styled';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#418b77',
  },
  '& .MuiRating-iconHover': {
    color: '#418b77',
  },
});

export const Star = () => {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <StyledRating
      name="simple-controlled"
      size="small"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
};
