/* eslint-disable react/jsx-key */
"use client";
import { Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Item from "./Item";
import ItemSlick from "./ItemSlick";

export default function ListItems(): React.ReactNode {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMovies = useCallback(async (page = 1) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=9128ef5f0450d945277efc563fe1655f&page=${page}`
      );
      return res?.data?.results;
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

      setData(totalMovies)
      
      console.log(totalMovies);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, [getMovies]);

  console.log(loading)

  const handleAddFavorite = item => {}

  useEffect(() => {
    getMovieWithNumber();
  }, [getMovieWithNumber]);

  return (
    <>
      <Stack
        sx={{
          color: "white",
          padding: "20px 20px 0",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <Typography variant="h1" sx={{ fontSize: "18px", userSelect: "none" }}>
          Trending Movie
        </Typography>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "6px",
            transition: "all 0.3 linear",
            userSelect: "none",
            overflowY: "hidden",
            overflowX: "auto",
            overflow: "auto",
            paddingTop: "27px",
            paddingBottom: "28px",
            scrollBehavior: "smooth",
            flexWrap: "wrap",
          }}
        >
          {/* {data.map((item, index) => (
            <ItemSlick item={item} key={index} />
          ))} */}
          {data.map((item, index) => (
            <Item item={item} key={index} onAddFavorite={handleAddFavorite} />
          ))}
        </Stack>
      </Stack>

      {/* <Stack
        flexWrap="wrap"
        justifyContent="center"
        spacing={4}
        flexDirection="row"
      >
        {data.map((item, index) => (
          <Item item={item} key={index} />
        ))}
      </Stack> */}
    </>
  );
}
