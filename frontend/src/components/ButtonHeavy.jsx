import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContainedButtons({
  label = "label",
  link = null,
}) {
  return (
    <Button variant="contained" href={link}>
      {label}
    </Button>
  );
}