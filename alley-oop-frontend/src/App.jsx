import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from "react-router-dom";

import Layout from './layout/Layout'
import HomePage from './pages/Home/HomePage';
function App() {


  return (
    <HelmetProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        
        </Routes>

      </Layout>
    </HelmetProvider>

  )
}

export default App
