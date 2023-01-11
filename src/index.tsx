import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

//root should probs include navbar
const Root = () => /*<div>Root heading</div>*/ <App />;
const Dashboard = () => <div>Dashboard</div>
const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route path="/dashboard" element={<Dashboard />} />
        </Route>
    
));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/*<App />*/}
  </React.StrictMode>
);

