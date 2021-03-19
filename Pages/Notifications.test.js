import React from 'react';
import { Text, Button } from 'react-native';
import renderer from 'react-test-renderer';
import { AuthProvider } from '../Providers/AuthProvider'


import Notifications from './Notifications';

describe('<Notifications />', () => {
  it('Should Render the component properly', () => {
    const navigation = { dispatch : jest.fn()}
    const tree = renderer.create(<AuthProvider><Notifications navigation={navigation} /></AuthProvider>);
    const testInstance = tree.root;
    testInstance.findByType(Button).props.onPress({});
    expect(navigation.dispatch).toHaveBeenCalled();
    expect(navigation.dispatch).toHaveBeenCalledWith({"type": "OPEN_DRAWER"});
    expect(tree.toJSON().children.length).toBe(2);
  });
});