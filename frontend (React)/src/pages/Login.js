import { Grid, TextField, Card,Typography, CardContent, Button } from "@material-ui/core";
import React, { useState } from "react";
import './login.css'
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  const initialValues = { userid: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  const handleSubmit = (e) => {
    if(e.preventDefault()) 
    {
      toast.warning("Incorrect Details :(");
    }
    else {
      if(formValues.userid === "Meet" && formValues.password === "Meet") {
        toast.warning("Incorrect Details");
        navigate("/home");
      } 
      else {
        toast.warning("Incorrect Details");
      }
    }
    console.log(formValues);
    
  };

  return(
    <div className="body">
    <div>
      <Navbar/>
    </div>
    <div className="cen">
      <Grid className="body">
      <Card sx={{boxShadow: 1}}style={{ maxWidth: 450, padding: "20px 5px"}}>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  User Login
                </Typography>

                <form className="mt-3" onSubmit={handleSubmit}>
                  <ToastContainer/>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                    <TextField
                        type="text"
                        placeholder="Enter Id"
                        label="User Id"
                        name="userid"
                        variant="outlined"
                        value={formValues.userid}
                        required
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField 
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        label="Password"
                        variant="outlined"
                        required
                        value={formValues.password}
                        onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        required
                        >
                          Login
                        </Button>
                    </Grid>
                  </Grid>
                </form>              
              </CardContent>
        </Card>
      </Grid>
    </div>
    </div>
  );
}

export default Login;