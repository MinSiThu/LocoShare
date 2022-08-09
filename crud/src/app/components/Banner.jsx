import React from "react";
import {Typography,Container,Box} from "@mui/material";
import flyingImage from "../../assets/imgs/flying.png"

const Banner = ()=>{
    return <React.Fragment>
        <Typography variant='h4' sx={{
            margin:'20px',
            'font-family':"Oleo"
        }}>LocoShare</Typography>
        <Container>
            <Box sx={{
                width:'90%',
            }}
            component="img"
            src={flyingImage}
            alt="Flying Image"
            >
            </Box>
            <Typography variant='h5' sx={{
                marginTop:'20px',
                'font-family':"Oleo"
            }}>Share your location with partner</Typography>
        </Container>
    </React.Fragment>
}

export default Banner;