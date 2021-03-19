import React, {useState} from 'react';
import { View, Button } from 'react-native';
import {useAuthContext} from '../Providers/AuthProvider'
import { TextInput } from 'react-native-paper';


export default function SigIn() {
  const {sigIn} = useAuthContext();
  const [email, setEmail] = useState();

  const emailChanged = (email) => setEmail(email);
  const doSignIn = () => sigIn(email);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        label="Email"
        onChangeText={emailChanged}
        style={{marginVertical : 5, maxHeight: 60, minWidth: 200}}  
      />
      <TextInput
        label="Password"
        secureTextEntry
        style={{marginVertical : 5, maxHeight: 60, minWidth: 200}}  
      />
      <Button
        title="Sign In"
        onPress={doSignIn}
      />
    </View>
  );
}