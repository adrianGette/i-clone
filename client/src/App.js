import React, { useState } from 'react';
import { Button } from "semantic-ui-react";
import { ApolloProvider } from '@apollo/client';
import client from './config/apollo';
import Auth from './pages/Auth';



export default function App() {

  const [auth, setAuth] = useState({name: "Adrian"});

  return (
    <ApolloProvider client={client}>
      {!auth ? <Auth /> : <h1>Logueado</h1>}
    </ApolloProvider>
  );
}

