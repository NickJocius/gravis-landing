import React, {lazy,Suspense} from 'react';
import { Switch, Route } from 'react-router-dom';

// views
const Home = lazy(() => import('./views/Home'));

function App() {
  return (

    <Suspense fallback={
      <div>Fallback</div>
    }>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
   
    </Suspense>
  );
}

export default App;
