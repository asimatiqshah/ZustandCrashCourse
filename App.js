import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import useAuthStore from "./store/authStore.js";


const App = () => {
  const {email,password,fetchLoadCredentials,authSaveCredentials,authRemoveCredentials} = useAuthStore();
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const handleSave=()=>{
    // saveCredentials(inputEmail,inputPassword);
    authSaveCredentials(inputEmail,inputPassword);
    console.log("Data Saved Successfully");
  }

  useEffect(()=>{
    fetchLoadCredentials();
  },[fetchLoadCredentials]);

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
      placeholder="Email"
      keyboardType="email-address"
      onChangeText={(val)=>setInputEmail(val)}
      value={inputEmail}
      autoCapitalize="none" />
      <TextInput style={styles.input}
      placeholder="Password"
      secureTextEntry={true}
      onChangeText={(val)=>setInputPassword(val)}
      value={inputPassword}
      />
      <Button title="Save" onPress={handleSave} />
      <View style={styles.credentialsContainer}>
        <Text>Welcome : {email}</Text>
        <Text>Your Password is : {password}</Text>
      </View>
      <Button title="Sign Out" onPress={authRemoveCredentials} />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 20, marginHorizontal: 16, },
  inputContainer: { flex: 1, justifyContent: 'center', },
  input: { padding: 10, borderColor: '#ccc', borderWidth: 1, marginBottom: 12, borderRadius: 4, },
  credentialsContainer: { marginTop: 20, },
});