import React, { useState } from "react";
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
function DrawerComp({links}) {
    const [open,setOpen]=useState(false)
    return (
        <>
            <Drawer PaperProps={{
                sx:{backgroundColor:'#25435a'},
            }} open={open} onClose={()=>{setOpen(false)}}>
                <List>
                    {links.map((link,index)=>(

                    <ListItemButton onClick={()=>{setOpen(false)}} key={index} divider>
                        <ListItemIcon>
                            <ListItemText sx={{color:'white'}}>{link}</ListItemText>
                            </ListItemIcon>
                    </ListItemButton>
                    ))}
                </List>
               
                <ShoppingCartCheckoutIcon sx={{marginLeft:3,placeItems: "center",fontSize:"30px",color:'white'}}/>
            </Drawer>

            <IconButton sx={{color:'BLACK'}} onClick={()=>{setOpen(!open)}}>
                <MenuRoundedIcon />
            </IconButton>
        </>

    )
}
export default DrawerComp;