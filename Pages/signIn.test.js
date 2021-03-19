import React from 'react';
import { TextInput, Button } from 'react-native';
import renderer, {act} from 'react-test-renderer';
import { AuthContext } from '../Providers/AuthProvider'
import Signin from './Signin';

jest.useFakeTimers()

describe('<Signin />', () => {
  it.only('Should Render the component properly', async () => {
    const context = {
        sigIn: jest.fn()
    }
    const tree = renderer.create(<AuthContext.Provider value={context}><Signin /></AuthContext.Provider>);
    const testInstance = tree.root;
    const inputText = testInstance.findAllByType(TextInput);

    await act(async () => {
        //email
        inputText[0].props.onChangeText('NEW EMAIL')

        //password
        inputText[1].props.onChangeText('PASSWORD')

        //BUTTON
        testInstance.findByType(Button).props.onPress({});
    })

    expect(context.sigIn).toHaveBeenCalled();
  });
});