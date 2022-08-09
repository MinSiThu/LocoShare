import React from "react";
import {AppBar, Toolbar, Fab, styled} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Geolocation } from '@capacitor/geolocation';
import { Dialog } from '@capacitor/dialog';

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
})

const Navbar = ()=>{

    const LogLocation = async()=>{
        const coordinates = await Geolocation.getCurrentPosition();
        console.log('Current position:', coordinates);
        await Dialog.alert({
            title: 'Coordinates',
            message: `Longitudes ${coordinates.coords.longitude}, Lattitude ${coordinates.coords.latitude}`,
        });
    }

    return <AppBar posiion="fixed" color='primary' sx={{top:'auto',bottom:0}}>
        <Toolbar>
            <StyledFab onClick={LogLocation}>
                <AddIcon/>
            </StyledFab>
        </Toolbar>
    </AppBar>
}

export default Navbar;