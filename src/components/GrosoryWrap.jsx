// src/components/GrosoryWrapper.jsx
import React, { lazy, Suspense } from 'react';

const Grosory = lazy(() => import('./Grosory'));

const GrosoryWrapper = () => {
  return (
    <Suspense fallback={<h1>Loading....</h1>}>
      <Grosory />
    </Suspense>
  );
};

export default GrosoryWrapper;
