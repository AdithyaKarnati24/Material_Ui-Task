import React from 'react';
import {
  Typography,
  Paper,
  Chip,
} from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';

const Repository=()=>{
const repositories = [
    { name: 'design-system', type: 'public', tech: 'React  ', size: '7320 KB', updated: '1 day ago' },
    { name: 'codeant-cl-app', type: 'private', tech: 'Javascript', size: '5871 KB', updated: '2 days ago' },
    { name: 'analytics-dashboard', type: 'private', tech: 'Python', size: '4521 KB', updated: '5 days ago' },
    { name: 'mobile-app', type: 'public', tech: 'Swift', size: '3096 KB', updated: '3 days ago' },
    { name: 'e-commerce-platform', type: 'private', tech: 'Java', size: '6210 KB', updated: '6 days ago' },
    { name: 'blog-website', type: 'public', tech: 'HTML/CSS', size: '1877 KB', updated: '4 days ago' }
  ];
return (
    <div style={{ padding: '20px' }}>
    <Typography variant="h6" style={{ marginBottom: '20px',marginRight:'100px' }}>
      Repositories
    </Typography>

    {repositories.map((repo, index) => (
      <Paper key={index} elevation={0} style={{ padding: '15px', marginBottom: '10px',border:'0.5px solid',borderColor:'lightgrey' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* repository namr,type */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
            <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
              {repo.name}
            </Typography>
            <Chip label={repo.type} size="small" style={{ color: 'blue',marginLeft:'20px' }} />
          </div>
        </div>

        {/* Repository tech,size,updated*/}
        <div style={{ display: 'flex', gap: '15px', marginTop: '5px' }}>
          <Typography variant="body2">{repo.tech} ● </Typography>
          <StorageIcon style={{ fontSize: 15, color: 'grey' }} /> 
          <Typography variant="body2" >{repo.size}</Typography>
          <Typography variant="body2" color="textSecondary">Updated {repo.updated}</Typography>
        </div>
      </Paper>
    ))}
  </div>
);
}

export default Repository;

