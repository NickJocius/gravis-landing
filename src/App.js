import React, {lazy,Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';

// layouts
const MainLayout = lazy(() => import('./layouts/MainLayout'));

// views
const Home = lazy(() => import('./views/Home'));

function App() {
  return (

    <Suspense fallback={
      <div>Fallback</div>
    }>
      <MainLayout>
        <Routes>
          <Route exact path="/" component={Home}/>
        </Routes>
      </MainLayout>
    </Suspense>
  );
}

export default App;
