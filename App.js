import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigation/index.js';
import { AuthProvider } from './src/navigation/AuthProvider.js';

const App = () => {
  return(
    <AuthProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </AuthProvider>
  )
}

export default App;