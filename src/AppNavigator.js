import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { ThemeContext } from './context/ThemeContext';
import { DarkModeTheme, LightTheme } from './themes/themes';
import { Pressable } from 'react-native';
import HomeScreen from './screens/Home';
import SettingsScreen from './screens/Settings';
import { useTheme } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const theme = isDark ? DarkModeTheme : LightTheme;


  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerRight: () => (
            <Pressable onPress={toggleTheme} style={{ marginRight: 15 }}>
              <FontAwesome
                name={isDark ? 'sun-o' : 'moon-o'}
                size={20}
                color={isDark ? '#ffd700' : '#333'}
              />
            </Pressable>
          ),
          tabBarIcon: ({ color, size }) => {
            const iconName = route.name === 'Home' ? 'home' : 'cog';
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Anasayfa' }} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Ayarlar' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
