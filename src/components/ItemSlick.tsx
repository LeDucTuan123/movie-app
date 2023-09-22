/* eslint-disable @next/next/no-img-element */
import { Scale } from "@mui/icons-material";
import { Stack, Typography, styled } from "@mui/material";
import React from "react";
import { itemProps } from "src/types/item";

interface Props {
    item: itemProps;
}

const MovieItem = styled('div')({
    transform: 'scale(1)',
    maxWidth: '400px',
    maxHeight: '500px',
    userSelect: 'none',
    overflow: 'hidden',
    borderRadius: '6px',
    // transform: 'center left',
    position: 'relative',
})

export default function ItemSlick({item}: Props) {
    const {backdrop_path, poster_path} = item
  return (
    <MovieItem sx={{":hover":{transform: 'Scale(1,1)', zIndex: 10}}} >
        <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt="123" style={{width: '100%', height:'100%', objectFit: 'cover'}} />
        <Stack>
            <Typography>12321</Typography>
        </Stack>
    </MovieItem>

  );
}
