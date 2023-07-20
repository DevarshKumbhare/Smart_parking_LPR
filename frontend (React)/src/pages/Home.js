import React from "react";
import Navbar from "../components/Navbar";
import { Box, Button } from "@material-ui/core";
import { useNavigate } from "react-router";

function Home() {
    const navigate=useNavigate();
  const navigateToBillingPage = () => {
    navigate("/home/billing-page");
  };
  const navigateToEntryPage = () => {
    navigate("/home/entry-page");
  };
  const navigateToUpdatePage = () => {
    navigate("/home/update-entry");
  };
  const navigateToDeleteEntry = () => {
    navigate("/home/delete-entry");
  };
    return(
        <div className="main">
            <Navbar/>
            <div className="flex-container">
            <Box className="button">
                <Button variant="contained" onClick={navigateToEntryPage}>Entry Page</Button>
            </Box>
            <Box className="button">
                <Button variant="contained" onClick={navigateToBillingPage}>Billing Page</Button>
            </Box>
            <Box className="button">
                <Button variant="contained" onClick={navigateToUpdatePage}>Update Entry</Button>
            </Box>
            <Box className="button">
                <Button variant="contained" onClick={navigateToDeleteEntry}>Delete Entry</Button>
            </Box>
            </div>
        </div>
    )
}
export default Home;