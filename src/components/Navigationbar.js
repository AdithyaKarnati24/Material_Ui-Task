import React from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Code,
  Security,
  Settings,
  Help,
  Folder,
  Keyboard,
  Support,
  ExitToApp,
} from '@mui/icons-material';

const Navigationbar = ()=>{
return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Sidebar Navigation */}
      <div style={{ 
        width: '250px', 
        backgroundColor: '#2c3e50', 
        color: 'white',
        padding: '20px 0'
      }}>
        {/* Title */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          padding: '0 20px 20px 20px',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          <Keyboard style={{ marginRight: '10px' }} />
          <Typography variant="h6">CodeAnt AI</Typography>
        </div>
        <Typography variant="h7" style={{ 
            padding:' 8px 12px',
            border: '1px solid #ddd',
            borderRadius:'5px',
             width: '200px',
             marginInline:'10px',
            color:'rgb(225, 234, 243)',
             display: 'flex',
          }}>
            KarnatiAdithya24
          </Typography>
        {/* Main Navigation start */}
        <List>
          <ListItem button style={{ color:'white'
 
         }}>
            <ListItemIcon style={{ color: 'white' }}><Folder /></ListItemIcon>
            <ListItemText primary="Repositories" />
          </ListItem>
          <ListItem button>
            <ListItemIcon style={{ color: 'white' }}><Code /></ListItemIcon>
            <ListItemText primary="AI Code Review" />
          </ListItem>
          <ListItem button>
            <ListItemIcon style={{ color: 'white' }}><Security /></ListItemIcon>
            <ListItemText primary="Cloud Security" />
          </ListItem>
          <ListItem button>
            <ListItemIcon style={{ color: 'white' }}><Help /></ListItemIcon>
            <ListItemText primary="How to Use" />
          </ListItem>
          <ListItem button>
            <ListItemIcon style={{ color: 'white' }}><Settings /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List> 
        {/* Main navigation end */}

        {/* Footer Section start */}
        <div style={{ 
          position: 'absolute', 
          bottom: '0', 
          width: '250px',
          padding: '20px',
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}>
          <ListItem button>
            <ListItemIcon style={{ color: 'white' }}><Support /></ListItemIcon>
            <ListItemText primary="Support" />
          </ListItem>
          <ListItem button>
            <ListItemIcon style={{ color: 'white' }}><ExitToApp /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </div> 
        {/* footer section end */}
      </div>
    
</div>
);
}
export default Navigationbar;