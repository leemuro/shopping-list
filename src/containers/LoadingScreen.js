import React from 'react';
import NavBar from '../components/NavBar'
import Loader from '../components/Loader'

export default function LoadingScreen() {
  return (
    <div>
      <NavBar 
        title="Shopping List"
        fixed={false}
      />
      <Loader />
    </div>
  )
}
