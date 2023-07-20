
import React from 'react'
import Table from '../components/Tab'
import Navbar from '../components/Navbar'
import Notifications from '../components/Notifications';
import './Bill.css';

function EntryPage() {
  var thing = [{serialNumber:"2" ,level:"3", slotNumber:"A3"},{serialNumber:"2" ,level:"4", slotNumber:"B47"}];
    return (
      <div > 
        <div>
          <Navbar/>
        </div>
        <div className="flex-container">
        <Table data={thing}/>
        <Notifications/>
        </div>
    </div>
    )}
export default EntryPage;
