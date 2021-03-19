import React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import { AuthProvider } from '../Providers/AuthProvider'
import {SignIn} from '../Pages/index'
import {
    createDrawerNavigator
  } from '@react-navigation/drawer';


import {MyDrawer} from './index';


jest.useFakeTimers()

const Drawer = createDrawerNavigator();

describe('<MyDrawer />', () => {
  it('Should show the sigin form first', () => {
    const tree = renderer.create(<AuthProvider><MyDrawer /></AuthProvider>);
    const testInstance = tree.root;
    const sigIn = testInstance.findByType(SignIn)
    const drawer = testInstance.findAllByType(Drawer.Navigator);
    expect(sigIn.children.length).toBe(1)
    expect(drawer.length).toBe(0);
  });
});