import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage.tsx';
import Help from './pages/Help.tsx';
import Privacy from './pages/Privacy.tsx';
import Terms from './pages/Terms.tsx';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<MainPage />} />
    <Route path='help' element={<Help />} />
    <Route path='privacy' element={<Privacy />} />
    <Route path='terms' element={<Terms />} />


  </Route>
));

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
