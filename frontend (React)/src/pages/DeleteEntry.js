import React,{useState} from "react";
import Navbar from "../components/Navbar";
import { Button, Card, CardContent, Grid, TextField, Typography } from "@material-ui/core";
import './login.css'
import { deleteLPR } from "../services/updatehelp";
//import { useNavigate } from "react-router";
import { toast,ToastContainer } from "react-toastify";

function DeleteEntry() {
    //const navigate = useNavigate();
    // const axios = require('axios');
    //     async function Delete( licence_plate ){
    //       await axios.delete('http://localhost:8080/api/v1/student'+licence_plate);
    //     }
    const initialValues = { lpr: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const handleChange = (e) => {
        // console.log(e.target);
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        // console.log(formValues);
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        deleteLPR(formValues.lpr)
      .then((response) => {
        console.log(response); // response is the data returned from the server
        console.log("success log"); // if the data is returned successfully, then the user is redirected to the login page
        <ToastContainer/>
        toast.success("Successful Deletion");
      })
      .catch((error) => {
        // if the data is not returned successfully, then the user is redirected to the login page
        console.log(error);
        console.log("error log");
        <ToastContainer/>
        toast.error("Invalid Credentials");
      });
      }

    return (
        <div>
        <div>
        <Navbar/>
        </div>
        <div className="cen">
        <Grid>
        <Card sx={{boxShadow: 1}}style={{ maxWidth: 450, padding: "20px 5px"}}>
            
        <CardContent>
                <Typography gutterBottom variant="h5">
                    Delete Entry to Database
                </Typography>
            <form className="mt-3" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <Typography gutterBottom variant="h6">licence Plate Number :</Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <TextField
                            type="text"
                            name="lpr"
                            variant="outlined"
                            value={formValues.lpr}
                            onChange={handleChange}
                            required/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" type="submit" color="primary">
                            Delete Entry
                        </Button>
                    </Grid>
                </Grid>
            </form>
            </CardContent>
        </Card>   
        </Grid>
        </div>
        </div>
    )
}

export default DeleteEntry;