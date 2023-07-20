//import {makeStyles} from "@material-ui/core/styles";
import './App.css';
import React from 'react';
import AllRoutes from './router/AllRoutes'



class App extends React.Component {
  //const style = styles
  //
  render (){
    return(
    <div className="App">
      {/* <Login/>
      <BillingPage  total="100" carNumber="TS08MV8841" entryTime="10:10:10" exitTime="20:20:20" timeSpent="100" parkingRate="200"/> */}
      <AllRoutes/>
    </div>
    );
  }
}

export default App;
