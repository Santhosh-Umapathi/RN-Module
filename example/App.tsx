import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Button} from 'rn-module';
import {IUser, TCheck} from 'rn-module/dist/typings';

const App = () => {
  const user: IUser = {firstName: 'test', lastName: 'test', id: 'tesr'};
  console.log('🚀 --- App --- user', user);
  const check: TCheck = 123;
  console.log('🚀 --- App --- check', check);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView
        style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text>Example App for RN-Module</Text>
        <Button />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;
