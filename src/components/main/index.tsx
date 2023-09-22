
import { Box } from '@mui/material'
import React from 'react'
import Header from './Header'

interface Props{
    children: React.ReactNode
}

export default function MainLayout({children}: Props) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
        <Header />

        <Box  sx={{
          flexGrow: 1,
        }}>
            {children}
        </Box>
    </Box>
  )
}
