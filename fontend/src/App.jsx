import React from 'react'
import { Button } from "@/components/ui/button"
import Navbar from './components/Navbar'
import { ThemeProvider } from "@/components/theme-provider"
import Banner from './components/Banner'
import { Categoris } from './components/Categoris'


const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar/>
      <Banner/>
      <Categoris/>
    </ThemeProvider>
  )
}

export default App