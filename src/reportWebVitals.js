const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
  // const [anchorEl, setAnchorEl] = React.useState(null);

// return (
//     <div style={{ padding: '20px' }}>
//     <Typography variant="h6" style={{ marginBottom: '20px',marginRight:'100px' }}>
//       Repositories
//     </Typography>

//     {repositories.map((repo, index) => (
//       <Paper key={index} elevation={1} style={{ padding: '15px', marginBottom: '10px',border:'0.5px solid',borderColor:'lightgrey' }}>
//        <div style={{
//          display: 'flex',
//          alignItems: 'center'  }}>
//        <Typography variant="subtitle1" style={{
//          fontWeight: 'bold',
//          width: '200px', 
//          overflow: 'hidden',
//          textOverflow: 'ellipsis',
//          whiteSpace: 'nowrap'  }}>
//          {repo.name}    </Typography>
