import { Link, Redirect } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

const index=()=>{
  return(
   <Redirect href={"/todoLists"} />
  )
}
export default index;