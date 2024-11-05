import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, font_sizes } from './src/theme_assets';


export default function App() {
  return (
    <View style={styles.container}>
      {/* Top  Black Header */}
      <View style={styles.topHeader}>
        <Text style={{ color: colors.light_gray }}>Location</Text>
        <Text style={{ color: 'white', fontSize: font_sizes.font_size_20 }}>Bilzen, Tanjungbalai</Text>
        {/* Search Field */}
        <View style={styles.bg_input_search}>
          <Image
          source={require('./assets/image/search-Icon.png')}
          style={{
            width:19,
            height:19,
            paddingLeft:16
          }}
          />
          <TextInput
          style={{paddingLeft:8,fontWeight:'600',flex:1,fontSize:font_sizes.font_size_14}}
            placeholder='Search Coffee'
            placeholderTextColor={colors.light_gray}
          />
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  topHeader: {
    backgroundColor: colors.dark,
    width: 375,
    height: 280, paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20
  },
  bg_input_search: {
    height: 52,
    width: 259,
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#2A2A2A',
    flexDirection:'row',
    alignItems:'center',
    marginTop:20
  },
});