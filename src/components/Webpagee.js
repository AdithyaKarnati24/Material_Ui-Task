import React from 'react';
import Navigation from './Navigationbar';
import Header from './Header';
import Repository from './Repository';
const Webpagee = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f8f9fa' }}>
      <Navigation />
      <div style={{ flex: 1, overflow: 'auto' }}>
        <Header />
        <Repository />
      </div>
    </div>
  );
};

export default Webpagee;
