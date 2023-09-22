"use client";

import { AppBar, Toolbar, Typography } from "@mui/material";
import { useResponsive } from "src/hooks";

export default function Header() {
  const isMdUp = useResponsive("up", "md");
  return (
    <AppBar position="static" sx={{padding: 1}}>
      <Toolbar
        variant="dense"
        // sx={
        //   !isMdUp && {
        //     display: "flex",
        //     justifyContent: "center",
        //     alignItems: "center",
        //     color: "red",
        //   }
        // }
      >
        {/* <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h4" color="inherit" component="div">
          Movie App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
