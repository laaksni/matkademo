//import './App.css'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import MatkaList from './components/MatkaList'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {

  return (
    <>
      <Container maxWidth="xl">
        <CssBaseline />
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            MATKOJA
          </Typography>  
        </Toolbar>
      </AppBar>
        <MatkaList />
      </Container>
    </>
  )
}

export default App
