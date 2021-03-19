import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {Feed, Notifications, SignIn} from '../Pages/index'

import {useAuthContext} from '../Providers/AuthProvider'

function CustomDrawerContent(props) {
  const {sigOut} = useAuthContext();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close"
        onPress={sigOut}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  const {isAuth} = useAuthContext();
  return (
    isAuth ?
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} openByDefault>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
    : <SignIn />
  );
}