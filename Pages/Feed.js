import React from 'react';
import { View, Text, Button } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import {useAuthContext} from '../Providers/AuthProvider'

export default function Feed({ navigation }) {
  const {user} = useAuthContext();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello {user.name}</Text>
      <Button
        title="Open drawer"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </View>
  );
}