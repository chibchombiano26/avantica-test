import React from 'react';
import {AuthProvider} from './Providers/AuthProvider'
import { NavigationContainer } from '@react-navigation/native';
import {MyDrawer} from './Drawer/index'

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </AuthProvider>
  );
}
