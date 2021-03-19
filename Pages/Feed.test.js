import React from 'react';
import { Text, Button } from 'react-native';
import renderer from 'react-test-renderer';
import { AuthProvider } from '../Providers/AuthProvider'


import Feed from './Feed';

describe('<Feed />', () => {
  it('Should Render the component properly', () => {
    const navigation = { dispatch : jest.fn()}
    const tree = renderer.create(<AuthProvider><Feed navigation={navigation} /></AuthProvider>);
    const testInstance = tree.root;
    const helloText = ((testInstance.findAllByType(Text))[0]).props.children.join();
    testInstance.findByType(Button).props.onPress({});
    expect(helloText).toBe('Hello ,')
    expect(navigation.dispatch).toHaveBeenCalled();
    expect(navigation.dispatch).toHaveBeenCalledWith({"type": "OPEN_DRAWER"});
    expect(tree.toJSON().children.length).toBe(2);
  });
});