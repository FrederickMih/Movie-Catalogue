import React from 'react';
import loading from '../../assets/loading.png';

const PageLoader = () => (
  <div>
    <img src={loading} style={{ width: '100px', margin: 'auto', display: 'block' }} alt="Loading" />
  </div>
);

export default PageLoader;
