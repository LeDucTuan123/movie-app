/* eslint-disable react/jsx-key */
'use client';
import {
  Box,
  CircularProgress,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import Item from './Item';
import { format } from 'date-fns';

export default function ListItems(): React.ReactNode {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState('Sort');

  const getMovies = useCallback(async (page = 1) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=9128ef5f0450d945277efc563fe1655f&page=${page}`
      );
      const data = res?.data?.results?.map((item: any) => {
        if (!item?.release_date) {
          item.release_date = format(new Date(), 'yyyy-MM-dd');
        }
        return item;
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getMovieWithNumber = useCallback(async () => {
    try {
      setLoading(true);
      let totalMovies: any = [];
      const movies = await Promise.all([
        getMovies(1),
        getMovies(2),
        getMovies(3),
        getMovies(4),
        getMovies(5),
        getMovies(6),
        getMovies(7),
        getMovies(8),
        getMovies(9),
        getMovies(10),
        getMovies(11),
        getMovies(12),
        getMovies(13),
        getMovies(14),
        getMovies(15),
        getMovies(16),
        getMovies(17),
        getMovies(18),
        getMovies(19),
        getMovies(20),
        getMovies(21),
        getMovies(22),
        getMovies(23),
        getMovies(24),
        getMovies(25),
      ]);

      movies.forEach((item) => {
        totalMovies = [...totalMovies, ...item];
      });

      setData(totalMovies);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, [getMovies]);

  const handleAddFavorite = (item: any) => {
    let newItems: any = data.map((i: any) => {
      if (i.id === item.id) {
        return {
          ...i,
          isFavorite: !i.isFavorite,
        };
      }

      return i;
    });
    setData(newItems);
  };

  const handleSort = useCallback(() => {
    setLoading(true);
    if (sort === 'asc') {
      const newData = [...data].sort(
        (a: any, b: any) =>
          new Date(a?.release_date) - new Date(b?.release_date)
      );
      setData(newData);
    } else if (sort === 'desc') {
      console.log('go here');
      const newData = [...data].sort(
        (a: any, b: any) =>
          new Date(b?.release_date) - new Date(a?.release_date)
      );
      setData(newData);
    }
    setLoading(false);
  }, [sort]);

  useEffect(() => {
    getMovieWithNumber();
  }, [getMovieWithNumber]);

  console.log(sort);

  useEffect(() => {
    handleSort();
  }, [handleSort]);

  const handleChangeSelect = (event: any) => {
    setSort(event.target.value);
  };

  return (
    <Box>
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress size={50} />
        </Box>
      ) : (
        <Stack
          sx={{
            color: 'white',
            padding: '20px 20px 0',
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Typography
              variant='h1'
              sx={{ fontSize: '18px', userSelect: 'none' }}
            >
              Trending Movie
            </Typography>
            <Select
              value={sort}
              label='sort'
              onChange={handleChangeSelect}
              sx={{
                color: 'white',
                fontSize: '14px',
              }}
            >
              <MenuItem value={'Sort'}>Sort</MenuItem>
              <MenuItem value={'asc'}>ASC</MenuItem>
              <MenuItem value={'desc'}>DESC</MenuItem>
            </Select>
          </Box>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: '6px',
              transition: 'all 0.3 linear',
              userSelect: 'none',
              overflowY: 'hidden',
              overflowX: 'auto',
              overflow: 'auto',
              paddingTop: '27px',
              paddingBottom: '28px',
              scrollBehavior: 'smooth',
              flexWrap: 'wrap',
            }}
          >
            {data.map((item: any, index) => (
              <Item
                item={item}
                key={index}
                onAddFavorite={handleAddFavorite}
                isActive={item?.isFavorite}
              />
            ))}
          </Stack>
        </Stack>
      )}
    </Box>
  );
}
