import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getUserRequest } from './../store';

export default function Main(){
  const userState = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const handleUser = () => {
    dispatch(getUserRequest(name));
  }

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder='Digite username'
        value={name}
        onChangeText={text => setName(text)}
      />
      <TouchableOpacity onPress={handleUser}>
        <Text>Search</Text>
      </TouchableOpacity>
      <Text>{userState.user.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

