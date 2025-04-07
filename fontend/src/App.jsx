import React from 'react'
import { Button } from "@/components/ui/button"
import Navbar from './components/Navbar'
import { ThemeProvider } from "@/components/theme-provider"


const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar/>
    </ThemeProvider>
  )
}

export default App