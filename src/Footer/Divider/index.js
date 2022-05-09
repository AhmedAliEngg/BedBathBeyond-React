import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
const Root = styled('div')(({ theme }) => ({
  width: '92%',
  marginLeft:'2pc',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export default function DividerLine() {
 
  return (
    <Root>
      
      <Divider variant='inset'></Divider>
    </Root>
  );
}
