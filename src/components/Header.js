import React from 'react';
import { AppBar, Toolbar, Paper, IconButton, InputBase, Button } from '@mui/material';
import { Search, Refresh, Add } from '@mui/icons-material';

const Header = ()=>{
return(
<AppBar 
position="static" 
elevation={0}
style={{ backgroundColor: 'white', color: 'black' }}
>
<Toolbar>
  {/* Search Bar */}
  <Paper style={{ 
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '380px',
    marginRight: '10px',
    marginInline:'40px'
  }}>
    <IconButton>
      <Search />
    </IconButton>
    <InputBase
      placeholder="Search repositories..."
      style={{ flex: 1,
      
       }}
    />
  </Paper>

  {/*  Buttons */}
  <div style={{ flex: 1 }} />
  <Button 
    variant="outlined" 
    color="white"
    startIcon={<Refresh />}
    style={{ marginRight: '10px',color:'black' }}
  >
    Refresh All
  </Button>
  <Button 
    variant="contained" 
    color="white" 
    startIcon={<Add />}
    style={{color:'black',border:'1px solid'}}
  >
    Add Repository
  </Button>
</Toolbar>
</AppBar>
);
}
export default Header;