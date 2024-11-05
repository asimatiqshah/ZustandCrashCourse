import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

const Setting=()=>{
  return(
    <>
      <View>
        <Text>Setting Page</Text>
       <Link href={'/profile'}>Go to Profile Page</Link>
      </View>
    </>
  )
}
export default Setting;