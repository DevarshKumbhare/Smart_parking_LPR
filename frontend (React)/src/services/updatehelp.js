import { myAxios } from "./helper";
import { mat }from "./helper";
import axios from 'axios';

let kx=0, ky=0; 
let parkingSpots=[];
let parkingSpotsLength=0;
let ans=69;
//let response=[];

let data=[];
let lpn="MH04JS2929"

let final_entry_time;
let final_exit_time;
let final_lpn;
let final_spot;
export let parcel=[[final_entry_time="",final_exit_time="",final_lpn="",final_spot=""]];
export let val=[[final_entry_time="",final_exit_time="",final_lpn="",final_spot=""]];

let car_in;
let car_num;
let car_spot;
export let courier=[[car_in="",car_num="",car_spot=""]];
//val.final_entry_time = "50";
val[0][0] = "20230719T143000";
val[0][1] = "20230719T173000";
val[0][2] = "150";
localStorage.setItem( 'test', JSON.stringify( val ) );
//parcel.test = "true";
/*
let mat = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 2, 2, 0, 1, 1, 0, 1],
  [0, 2, 2, 2, 2, 0, 1, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 1, 1, 1],
  [0, 0, 1, 1, 1, 0, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];*/

export const update = (lpr,time) => {
    //find the license plate

    async function imgurlsend() {
      const options = {
        method: 'POST',
        url: 'https://license-plate-detection.p.rapidapi.com/license-plate-detection',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '11be6e3f50mshfe6e35d0610e6c4p1002b1jsn7e09fd29f8e6',
          'X-RapidAPI-Host': 'license-plate-detection.p.rapidapi.com'
        },
        data: {
          url: lpr
        }
      }; 
      try {
        const response = await axios.request(options);
        console.log(response.data[0].value);
        lpn=response.data[0].value;
      } catch (error) {
        console.error(error);
      }
    }



    //logic
    function bfsofmat(matrix) {
      return new Promise(resolve => {
        // Asynchronous operation
        setTimeout(() => {
          console.log('Async Function 1');
          let u=99;
          let f=0;
          const row = matrix.length;
          const col = matrix[0].length;
          const vis = new Array(row).fill(0).map(() => new Array(col).fill(false));
          const q = [];
          q.push([{ x: 0, y: 0 }, 0]);
          vis[0][0] = true;
          const delRow = [0, 1, 0, -1];
          const delCol = [1, 0, -1, 0];
          let steps;
      
          while (q.length > 0) {
              const { x, y } = q[0][0];
              vis[x][y] = true;
              steps = q[0][1];
              q.shift();
      
              for (let i = 0; i < 4; i++) {
                  let nx = x + delRow[i];
                  let ny = y + delCol[i];
      
                  if (nx < row && nx >= 0 && ny < col && ny >= 0) {
                      if (matrix[nx][ny] === 1 && !vis[nx][ny]) {
                          u= (10*nx+ny);
                          f=1;
                          break;
                      } else if (matrix[nx][ny] === 0 && !vis[nx][ny]) {
                          vis[nx][ny] = true;
                          q.push([{ x: nx, y: ny }, steps + 1]);
                      }

                  }
              }
              if(f==1) break;
          }
          resolve(u);
        }, 2000);
      });
    }

    /*
    function fetchData() {
      return new Promise(resolve => {
        // Asynchronous operation
        setTimeout(() => {
          console.log('Async Function 2');
          try {
            const response =axios.get('http://localhost:8080/api/v1/student');
            const responseData = response.data;
            parkingSpots = responseData//.map(item => item.parking_spot);
            console.log(parkingSpots);
            // Continue with the code that depends on parkingSpots
          } catch (error) {
            console.error(error);
          }
          resolve();
        }, 1000);
      });
    }*/

    function yt(ans) {
      return new Promise(resolve => {
        // Asynchronous operation
        setTimeout(() => {
          console.log('Async Function 3');
          parkingSpotsLength = parkingSpots.length;
          console.log(parkingSpotsLength);
          console.log('Execution completed');
          console.log(ans.x + ',' + ans.y);
          kx=ans.x;
          ky=ans.y;
    
          console.log(kx);
          console.log(ky);
          resolve();
        }, 1000);
      });
    }

    function putdata(ans) {
      return new Promise(resolve => {
        // Asynchronous operation
        setTimeout(() => {
          courier[0][1]=time;
          courier[0][1]=lpn;
          courier[0][1]="L3S"+ans;
          localStorage.setItem( 'courier', JSON.stringify( courier ) );
          resolve();
        }, 1000);
      });
    }

    async function executeAsyncFunctions() {
      
    //const lvl = new Array(3).fill(100);

      console.log('Starting execution');

      await imgurlsend();
    
      // Execute asyncFunction1 first
      await fetchData();
    
      // Execute asyncFunction2 after asyncFunction1 completes
      //await bfsofmat(mat);
    
      // Other lines of code
      ans = await bfsofmat(mat);
      console.log(ans);

      let x=Math.floor(ans/10);
      let y=ans%10;

      mat[x][y]=2;

      await putdata(ans, time, lpn);

      const values = {license_plate : lpn , entry_time : time, parking_spot:"L3S"+ans, status:false};
      localStorage.setItem( 'values', JSON.stringify( values ) );
      return myAxios
        .post("/api/v1/student", values)

      //await yt(ans);
      //api calls
      //const values = {license_plate : lpr , entry_time : time, parking_spot:"L3S"+ans, status:false};
    }
/*
  function main() {





    /*for(let i=0; i<parkingSpotsLength; i++)
    {
      console.log(mat);
      ans=bfsofmat(mat);
      const ps="L3S"+ans.x+ans.y;
      console.log(ps);
      if(parkingSpots[i]==ps)
      {
        mat[ans.x+1][ans.y+1]=2;
        i=0;
      }
    }*/


  async function fetchData() {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/student');
      const responseData = response.data;
      data=responseData;
      parkingSpots = responseData.map(item => item.parking_spot);
      console.log(parkingSpots);
      
      // Continue with the code that depends on parkingSpots
    } catch (error) {
      console.error(error);
    }
  }
    
    
    executeAsyncFunctions();

    //api calls
    return myAxios
      .get("/api/v1/student")
      .then(([]) => []);

  };

  export const deleteLPR = (lpr) => {

    let parkingSpots = [];
    let licensePlates = [];
    let entry_time=[];
    const dateObj = new Date();

    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    const hours = String(dateObj.getHours()).padStart(2, '0');
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');
    const seconds = String(dateObj.getSeconds()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;

        //find the license plate

        async function imgurlsend() {
          const options = {
            method: 'POST',
            url: 'https://license-plate-detection.p.rapidapi.com/license-plate-detection',
            headers: {
              'content-type': 'application/json',
              'X-RapidAPI-Key': '11be6e3f50mshfe6e35d0610e6c4p1002b1jsn7e09fd29f8e6',
              'X-RapidAPI-Host': 'license-plate-detection.p.rapidapi.com'
            },
            data: {
              url: lpr
            }
          }; 
          try {
            const response = await axios.request(options);
            console.log(response.data[0].value);
            lpn=response.data[0].value;
          } catch (error) {
            console.error(error);
          }
        }

        function asyncFunction5() {
          return new Promise(resolve => {
            // Asynchronous operation
            setTimeout(() => {
              console.log('Async Function 5');
              fetchData();
              async function fetchData() {
                try {
                  const response = await axios.get('http://localhost:8080/api/v1/student');
                  const responseData = response.data;
                  data=responseData;
                  //parkingSpots = responseData.map(item => item.parking_spot);
                  // Continue with the code that depends on parkingSpots
                } catch (error) {
                  console.error(error);
                }
              }
              resolve(data);
            }, 1000);
          });
        }


  
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
              entry_time.push(item.entry_time);

            });
 
            // Use the parkingSpots and licensePlates arrays as needed
            console.log(parkingSpots, licensePlates, entry_time, formattedDate);
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
          const index= licensePlates.indexOf(lpn);
        
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
          parcel[0][0]=entry_time[index];
          parcel[0][1]=licensePlates[index];
          parcel[0][2]=formattedDate;
          parcel[0][3]=val;
          localStorage.setItem( 'items', JSON.stringify( parcel ) );
          console.log(parcel);
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

      await imgurlsend();

      const d=await asyncFunction5();

      console.log(d);
    
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
      .delete(`http://localhost:8080/api/v1/student/${lpn}`)
    }
  
    executeAsyncFunctions()
  
  
    return myAxios
    .get("/api/v1/student")
    .then(([]) => []);
    };