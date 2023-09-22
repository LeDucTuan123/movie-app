import React from 'react'
import MainLayout from 'src/components/main';

type Props = {
    children: React.ReactNode;
  };

export default function Layout({ children }: Props) {
    return <MainLayout>{children}</MainLayout>;
  }
  