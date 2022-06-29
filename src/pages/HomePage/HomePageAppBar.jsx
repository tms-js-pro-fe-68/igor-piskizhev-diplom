import { useNavigate } from "react-router-dom";
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";

export default function HomePageAppBar() {
    const navigate = useNavigate();
    return (
            <Box
                sx={{
                    display: 'flex',
                    alignItems : 'center',
                    justifyContent: 'space-between',
                    background: 'black',
                    p: 2,

                }} >
                
                <Typography sx={{color : 'white', fontWeight:'bold'}}>Your Garage</Typography>
                <Typography sx={{color:'white'}}>Owner: {sessionStorage.email}</Typography>
                    <Button 
                    sx={{
                        display :'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor:'gray',
                        color:'white'
                    }}
                    onClick={
                        ()=>{
                        sessionStorage.token = '';
                        sessionStorage.email = '';
                        navigate('/login')
                        }
                    }
                    >
                        <AccountCircle sx={{
                            m:'5px'
                        }}/>
                         SIGN OUT
                    </Button>
            </Box>
    )
}