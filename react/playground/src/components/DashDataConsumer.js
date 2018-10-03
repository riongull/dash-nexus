import React from 'react';
import { DashData } from "./DashData";

export const DashDataConsumer = () => (
  <DashData 
    apiPath="http://insight.dash.org/api/block/1"
    render={({ isLoading, block1, block2, walletInfo }) => {
      return ( isLoading
        ? <pre>Loading...</pre> 
        : <pre>{JSON.stringify([block1, block2, walletInfo], null, 2)}</pre>
      )
    }}
  />
);