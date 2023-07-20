import React from 'react'
import { Box, Typography, Card, CardContent } from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";

function DataTable(props) {
    return (
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
                        Car In Time : {props.entryTime}
                    </Typography>
                    <Typography variant="h6" color="blue" align="center" style={{margin: "20px", padding: "10px"}}>
                        Car Out Time : {props.exitTime}
                    </Typography>
                    <Typography variant="h6" color="blue" align="center" style={{margin: "20px", padding: "10px"}}>
                        Total Time Spent : {props.timeSpent} hours
                    </Typography>
                    <Typography variant="h6" color="blue" align="center" style={{margin: "20px", padding: "10px"}}>
                        Parking Rate : Rs {props.parkingRate} per hour
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );

}

export default DataTable;
