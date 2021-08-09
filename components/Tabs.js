import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home';
import CodeList from '../screens/CodeList';
import Profile from '../screens/Profile';
import Colors from '../config/Colors';

const Tab = createMaterialBottomTabNavigator();

export default Tabs = () => {

    return(
        <NavigationContainer>
        <Tab.Navigator
          initialRouteName="CodeList"
          activeColor={Colors.active}
          inactiveColor={Colors.inactive}
          labelStyle={{ fontSize: 12 }}
          barStyle={{ backgroundColor: Colors.background,  
                      borderTopWidth: 0,
                      elevation: 0,
                    }}
          shifting={true}
          labeled={true}
          lazy={true}
        >

        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, focused }) => (
              focused={focused},
              <MaterialCommunityIcons
                name={focused ? "home" : "home-outline"}
                color={color}
                size={27}
              />
            )
          }}
        />

        <Tab.Screen
          name="CodeList"
          component={CodeList}
          options={{
            tabBarLabel: 'Code List',
            tabBarIcon: ({ color, focused }) => (
              focused={focused},
              <MaterialCommunityIcons
                name={focused ? "view-list" : "view-list-outline"}
                color={color}
                size={27}
              />
            )
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, focused }) => (
              focused={focused},
              <MaterialCommunityIcons
                name={focused ? "account" : "account-outline"}
                color={color}
                size={27}
              />
            ),
          }}
        />
      </Tab.Navigator>
      </NavigationContainer>
    );
}