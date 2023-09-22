'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { itemProps } from 'src/types/item';
import { Box, Stack, styled } from '@mui/material';
import Link from 'next/link';
import Iconify, { Icon } from '@iconify/react';

interface props {
  item: itemProps;
  onAddFavorite?: (item: any) => {} | void;
  isActive?: boolean;
}

const MovieRowContainer = styled('div')({});

export default function Item({ item, onAddFavorite, isActive }: props) {
  const { title, id, name, backdrop_path, vote_average, release_date } = item;

  return (
    <>
      <Card
        sx={{
          width: 345,
          height: 445,
          margin: '7px',
          backgroundColor: '#3333',
          position: 'relative',
          color: 'white',
        }}
      >
        <Link href='sd'>
          <CardMedia
            sx={{ height: 240 }}
            image={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            title='green iguana'
          />
        </Link>
        <Stack sx={{ position: 'absolute', left: '270px', top: '190px' }}>
          <Typography
            variant='overline'
            color='Highlight'
            sx={{
              padding: '5px',
              backgroundColor: '#903a3a',
              border: 'none',
              borderRadius: '7px',
              alignItems: 'center',
            }}
          >
            {vote_average}
          </Typography>
        </Stack>
        <CardContent>
          <Box
            display='flex'
            flexDirection='row'
            alignItems='center'
            sx={{ justifyContent: 'space-between' }}
          >
            <Typography gutterBottom variant='h5' component='div'>
              {title || name}
            </Typography>
            <Button
              onClick={() => onAddFavorite?.(item)}
              variant='text'
              color={isActive ? 'warning' : 'inherit'}
            >
              <Icon icon='clarity:favorite-solid' fontSize='30px' />
            </Button>
          </Box>
          <Box>
            <Typography variant='body2' color='rgb(178 178 178 / 60%)'>
              {release_date && `Date: ${release_date}` }
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
