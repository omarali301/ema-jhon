import React from "react";

import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Review from "./component/Review/Review";
import Manage from "./component/Manage/Manage";
import ProductDetails from "./component/ProductDetails/ProductDetails";
import Notfound from "./component/Notfound/Notfound";



function App() {
  return (
    <div className="App">

<Router>

      <Header></Header>
    


      <Switch>
        <Route path="/shop">
          <Shop></Shop>
       </Route>
        <Route path="/review">
          <Review></Review>
       </Route>

       <Route path="/Manage">
          <Manage></Manage>
       </Route>
       <Route exact path="/">
          <Shop></Shop>
       </Route>
       <Route path="/product/:productKey">
          <ProductDetails></ProductDetails>
       </Route>

    <Route path="*">
     <Notfound></Notfound>
    </Route>
       </Switch>

  </Router>
      

  
      
    </div>
  );
}

export default App;
