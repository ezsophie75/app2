import React, { lazy, Suspense } from 'react';

const LazyTemplateName = lazy(() => import('../../../../grc/hookedFunction/TemplateName'));

const TemplateName = props => (
  <Suspense fallback={null}>
    <LazyTemplateName {...props} />
  </Suspense>
);

export default TemplateName;
