import React from 'react';
import spinner from '../../assets/loader.gif';

const PageLoader = () => (
  <div>
    <img src={spinner} style={{ width: '200px', margin: 'auto', display: 'block' }} alt="Loading" />
  </div>
);

export default PageLoader;
