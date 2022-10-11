import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import Home from './screens/Home'
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { COLORS } from './constants/theme';
import Details from './screens/Details';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  }
}

const Stack = createStackNavigator()


export default function App() {
  const fonts = {
    InterBold: require('./assets/fonts/Inter-Bold.ttf'),
    InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
    InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
    InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
    InterLight: require('./assets/fonts/Inter-Light.ttf'),
  }

  const [isLoaded] = useFonts(fonts)

  if (!isLoaded) {
    return (
      <ActivityIndicator size="large" color={COLORS.primary}/>
    )
  } else {
    return (
      <SafeAreaProvider style={{ flex: 1 }}>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
              headerShown: false,
              }}
              initialRouteName="Home"
            >
              <Stack.Screen name='Home' component={Home}/>
              <Stack.Screen name='Details' component={Details}/>
            </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
