import React from 'react'
import Home from './pages/Home'
import Layout from './components/Layout/Layout'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <Layout>
      <Navbar />
        <Home />
      </Layout>
  )
}

export default App
