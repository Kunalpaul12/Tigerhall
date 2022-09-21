import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigation';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import Config from './src/config';

const client = new ApolloClient({
  uri: Config?.api,
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
