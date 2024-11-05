import { Stack } from "expo-router";
import { Text, View } from "react-native";

const Layout=()=>{
    return(
       <Stack>
        <Stack.Screen options={{headerShown: false}}  name="todoLists" />
        <Stack.Screen options={{headerShown: false}}  name="home" />
       </Stack>
    )
}
export default Layout;