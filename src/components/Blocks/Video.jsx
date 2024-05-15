import React, { Suspense } from 'react'

const LazyYoutube = React.lazy(() => import('./Youtube.jsx'))

export default function Video({ id }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyYoutube id={id} />
    </Suspense>
  )
}
