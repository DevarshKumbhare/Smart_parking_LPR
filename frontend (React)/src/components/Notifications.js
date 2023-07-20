import React from "react";
import { Card,CardContent,Typography } from "@material-ui/core";

function Notifications() {
    let data = JSON.parse(localStorage.getItem('courier')) || [];
    let data2 = JSON.parse(localStorage.getItem('values')) || [];

    console.log(data2);
    let inTime="";
    let lpn="";
    let spot= "";
    function display() {
        if(!data2) {
            throw new Error("Data must be provided.");
        }
        else {
            inTime = data2.entry_time;
            lpn = data2.license_plate;
            spot = data2.parking_spot;
        }
    };
    try {
    display();
    }
    catch(error) {
        console.error(error.message);
    }
    return(
            <div style={{maxWidth: "50%"}}>
            <Card style={{
                width: "100%",
                backgroundColor: "#D3D3D3",
                //columnWidth: "auto",
                //direction: "row",
                //marginRight: "auto",
                component: "span",
                borderColor: "#000000",
            }}>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" align="center" style={{margin: "20px", padding: "10px"}}>
                        Billing Information
                    </Typography>
                    <Typography variant="h6" color="blue" align="center" style={{margin: "20px", padding: "10px"}}>
                        Car In Time : {inTime}
                    </Typography>
                    <Typography variant="h6" color="blue" align="center" style={{margin: "20px", padding: "10px"}}>
                        Car Number : {lpn}
                    </Typography>
                    <Typography variant="h6" color="blue" align="center" style={{margin: "20px", padding: "10px"}}>
                        Parking Spot : {spot}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
export default Notifications;