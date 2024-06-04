
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './routes/Home.tsx';
import Work from './routes/Work.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/development" element={<Home />} />
        <Route path="/development/work/:id" element={<Work />} />
        {/* <Route path="/" element={logged == 'true' ? <Home /> : <Navigate to="/suprime-video/" />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
)
