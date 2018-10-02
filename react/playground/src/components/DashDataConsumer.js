import React from 'react';
import { DashData } from "./DashData";

export const DashDataConsumer = () => (
  <DashData 
    apiPath="http://insight.dash.org/api/block/1"
    render={({ isLoading, block1, block2 }) => {
      return ( isLoading
        ? <div>Loading...</div> 
        : <pre>{JSON.stringify([block1, block2], null, 2)}</pre>
      )
    }}
  />
);