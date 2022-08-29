import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { color } from '@mui/system';

export default function MinHeightTextarea() {
  return (
    <TextareaAutosize
      aria-label="minimum height"
      minRows={16}
      placeholder="Add Event Description"
      style={{ width: 1150, backgroundColor: '#f5f5f5' }}
       
    />
  );
}
