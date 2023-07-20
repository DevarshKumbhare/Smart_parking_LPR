import { myAxios } from "./helper";
import { mat }from "./helper";
import axios from 'axios';

export const deleteLPR = (lpr) => {

  let parkingSpots = [];
  let licensePlates = [];

  function asyncFunction1() {
    return new Promise(resolve => {
      // Asynchronous operation
      setTimeout(() => {
        console.log('Async Function 1');
        axios.get('http://localhost:8080/api/v1/student')
        .then(response => {
          const responseData = response.data;
      
          responseData.forEach(item => {
            parkingSpots.push(item.parking_spot);
            licensePlates.push(item.license_plate);
          });
      
          // Use the parkingSpots and licensePlates arrays as needed
          console.log(parkingSpots, licensePlates);
        })
        .catch(error => {
          console.error(error);
        });

        resolve();
      }, 2000);
    });
  }

  function asyncFunction2() {
    return new Promise(resolve => {
      // Asynchronous operation
      setTimeout(() => {
        console.log('Async Function 2');
        const index= licensePlates.indexOf(lpr);
      
        console.log(index);
        resolve(index);
      }, 1000);
    });
  }

  function asyncFunction3(index) {
    return new Promise(resolve => {
      // Asynchronous operation
      setTimeout(() => {
        console.log(parkingSpots[index]);
        console.log('Async Function 3');
        const val=(parkingSpots[index]).toString();//L3S52

        resolve(val);
      }, 1000);
    });
  }

  function asyncFunction4(val) {
    return new Promise(resolve => {
      // Asynchronous operation
      setTimeout(() => {
        console.log('Async Function 4');
        const substring = val.substring(val.length - 2);
        console.log(substring);
        resolve(substring);
      }, 1000);
    });
  }

  async function executeAsyncFunctions() {
    console.log('Starting execution');
  
    // Execute asyncFunction1 first
    await asyncFunction1();
  

    const index=await asyncFunction2();

    const num=await asyncFunction3(index);

    const ans=await asyncFunction4(num);


    const kx=Math.floor(ans/10);
    const ky=ans%10;

    mat[kx][ky]=1;
  
    // Execute asyncFunction2 after asyncFunction1 completes
    //await asyncFunction2();
  
    // Other lines of code
    console.log('Execution completed');

    return myAxios
    .delete(`http://localhost:8080/api/v1/student/${lpr}`)
  }

  executeAsyncFunctions()


  return myAxios
  .get("/api/v1/student")
  .then(([]) => []);
  };