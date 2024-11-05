import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const Profile=()=>{
    const params = useLocalSearchParams();
    console.log(params);
    return(
        <>
        <View>
          <Text>Profile</Text>
        </View>
      </>
    )
}
export default Profile;