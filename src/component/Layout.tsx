import React from 'react'
import NavBar from './NavBar'

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({children}: LayoutProps) {
  return (
    <>
    <NavBar />
    <main>{children}</main>
    </>
  )
}

export default Layout