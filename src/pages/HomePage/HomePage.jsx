import Page from "../../components/Page";
import HomePageAppBar from "./HomePageAppBar";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Collapse, IconButton, List, Stack, TextField, Typography } from "@mui/material";
import { useVehicleGet } from '../../query/vehicle'
import { useAppContext } from "../../components/AppContext";
import { useEffect, useState } from "react";
import { Expand as ExpandMore } from "@mui/icons-material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VehicleList from "../../components/VehicleList";
import api from "../../api";
import AddNewVehicleButton from "./AddNewVehicleButton";



export default function HomePage( ) {
  const { data: vehicles = [], setVehicle } = useVehicleGet()
  const { cart, setCart  } = useAppContext()
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => { 
    setExpanded(!expanded);
  }; 
    
    const loadVehicles = (description,title ) => {
      api
        .get(`/vehicles`, {
          params: {
            description,
            title
          },
        })
        .then(({ data }) => setVehicle(data))
    }
  
    useEffect(() => {
      loadVehicles()
    }, [])
  
   
return(
  <Page>  
      <HomePageAppBar />
      
  <Box
        sx={{
          m: 4,
          p: 2,
          display: 'grid',
          gap: 2,
          width: 1,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          },
          color: 'white',
        }}
      >
        <VehicleList   {...{vehicles, loadVehicles}}  >
        
        {vehicles.map(vehicle => (
          <Card key={vehicle.id} sx={{ maxWidth: 345, p: 3, m:3 }}>
            <CardMedia
              component="img"
              height="194"
              image={vehicle.imageUrl}
              alt="vehicle"
            />
            <CardContent>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="subtitle1" color="text.secondary">
                  {vehicle.make}
                </Typography>
              </Stack>
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                <ExpandMoreIcon />
                </ExpandMore>
                
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                  {vehicle.description}
                  </Typography>
                </CardContent>
              </Collapse>
              <Typography variant="body2" color="text.secondary">
                {vehicle.bodyStyle}
              </Typography>
              <Typography >
                <AddNewVehicleButton onAfterSubmit={loadVehicles} />
              </Typography>
            </CardContent>
            <Typography>
            <VehicleList {...{vehicles, loadVehicles}} />
             </Typography>
          </Card>
        
        ))}
        </VehicleList>
        
      </Box>


      {JSON.stringify(cart)}
  </Page>
);
}