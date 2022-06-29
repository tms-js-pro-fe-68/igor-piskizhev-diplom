import { useNavigate } from "react-router-dom";
import AccountCircle from '@mui/icons-material/AccountCircle';
import Page from "../../components/Page";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import sx from "@mui/system/sx";

export default function HomePage() {
    const navigate = useNavigate();
    return (
        <Page>
            <Box
                sx={{
                    display: 'flex',
                    alignItems : 'center',
                    justifyContent: 'space-between',
                    background: 'black',
                    p: 2,

                }} >
                
                <Typography style={{color : 'white', }}>Your Garage</Typography>
                <Typography style={{color:'white'}}>Owner: {sessionStorage.email}</Typography>
                    <Button 
                    sx={{
                        display :'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor:'white',
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
            



        </Page>
        
    )
}