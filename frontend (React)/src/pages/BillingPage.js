import Navbar from '../components/Navbar'
import Datatable from '../components/DataTable'
import Bill from '../components/Bill'
import React from 'react'
import './Bill.css';
import { parcel } from '../services/updatehelp';
import { val } from '../services/updatehelp';
function BillingPage() {
  //console.log(parcel.test);
  let data = parcel;
  let items = JSON.parse(localStorage.getItem('items')) || [];
  //let test = (localStorage.getItem('test')) || [];
  const parkingRate = 100;
  //console.log(test);
  //console.log(test);
  //console.log(items);
  const entryTime = items[0][0];
  const exitTime = items[0][2];
  const final_lpn = items[0][1];
  //console.log(typeof entryTime);
  function getTimeDifference(entryTime, exitTime) {
    if (!entryTime || !exitTime) {
      throw new Error("Both entryTime and exitTime must be provided.");
    }

    // Extract the components from the time strings
    const entryDate = new Date(entryTime);
    const exitDate = new Date(exitTime);
  
    // Calculate the time difference in milliseconds
    const timeDifferenceMs = exitDate - entryDate;
  
    // Convert milliseconds to hours, minutes, and seconds
    let hours = Math.floor(timeDifferenceMs / 3600000);
    let minutes = Math.floor((timeDifferenceMs % 3600000) / 60000);
    let seconds = Math.floor((timeDifferenceMs % 60000) / 1000);
  
    if(seconds>0) {
      minutes+=1;
    }
    if(minutes>0) {
      hours+=1;
    }
    return hours;
  }
  //const entryTime = "20230719T143000"; // July 19, 2023, 14:30:00
  //const exitTime = "20230719T173000";  // July 19, 2023, 17:30:00
  let timeDifference=0;
  try {
    timeDifference = getTimeDifference(entryTime, exitTime);
    console.log(timeDifference);
  } catch (error) {
    console.error(error.message);
  }
  
  
  function calcRate(timeDifference) {
    return timeDifference * parkingRate;  
  }
  const total = calcRate(timeDifference);
  //console.log(timeDifference);

    return (
      <div > 
        <div>
          <Navbar/>
        </div>
        <div className="flex-container">
          <Datatable entryTime={entryTime} exitTime={exitTime} timeSpent={timeDifference} parkingRate={parkingRate}/>
          <Bill total={total} carNumber={final_lpn}/>
        </div>
    </div>
    )
}

export default BillingPage
