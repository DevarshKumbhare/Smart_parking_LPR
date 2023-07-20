import { Box,Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

const handleClickOpen = () => {
    toast.success("Recepit will be printed now!");
}

function Bill(props) {
    return (
        <div style={{
            maxWidth:"50%"
        }}>
            <Card style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#D3D3D3",
                //columnWidth: "auto",
                //marginRight: "auto",
                //margin: "auto",
            }}>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" align="center">
                        Car No : {props.carNumber}
                    </Typography>
                    <Typography variant="h6" gutterBottom align="center">
                        Grand Total : {props.total}
                    </Typography>
                    <CardActions className="justify-content-end" variant="contained" color="alert">
                        <Box textAlign='center'>
                        <Button variant='contained' onClick={handleClickOpen}>
                            Print Receipt
                        </Button>
                        <ToastContainer/>
                        </Box>
                    </CardActions>
                </CardContent>
            </Card>
        </div>
    );
}

export default Bill;
