'use client';

import { Icon } from '@iconify/react';
import { Box, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { itemProps } from 'src/types/item';

interface props {
  item: itemProps;
  onAddFavorite?: (item: any) => {} | void;
  isActive?: boolean;
}

export default function Item({ item, onAddFavorite, isActive }: props) {
  const { title, id, name, backdrop_path, vote_average, release_date } = item;

  return (
    <>
      <Card
        sx={{
          width: 345,
          backgroundColor: '#3333',
          position: 'relative',
          color: 'white',
          margin: '15px',
        }}
      >
        <Box position='relative'>
          <CardMedia
            sx={{ height: 240 }}
            image={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            title='green iguana'
          />
          <Stack sx={{ position: 'absolute', right: '10px', bottom: '10px' }}>
            <Typography
              variant='overline'
              sx={{
                padding: '5px',
                backgroundColor: 'success.main',
                borderRadius: '7px',
                alignItems: 'center',
                color: 'white',
              }}
            >
              {vote_average}
            </Typography>
          </Stack>
        </Box>

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
            <Typography
              variant='body2'
              color='rgb(178 178 178 / 60%)'
            ></Typography>
            <Typography variant='body2' color='rgb(178 178 178 / 60%)'>
              {release_date && `Year: ${release_date}`}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
