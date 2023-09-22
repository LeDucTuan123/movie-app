"use client"
import { Stack } from '@mui/material';
import ListItems from './ListItems';

export default function Content() {
 
  return (
    <Stack sx={{padding:5}}>
        <Stack>
            <ListItems />
        </Stack>
    </Stack>
  )
}
