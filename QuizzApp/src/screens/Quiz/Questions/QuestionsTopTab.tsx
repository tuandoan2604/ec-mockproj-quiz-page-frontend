import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Q1 from './Q1';
import Q2 from './Q2';
import Q3 from './Q3';
import Q4 from './Q4';

const Tab = createMaterialTopTabNavigator();

const QuestionsTopTab = () => {
  return (
    <Tab.Navigator
      style={{
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
      }}
      screenOptions={{
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          color: '#FFF',
        },
      }}>
      <Tab.Screen
        name={'1'}
        component={Q1}
        options={{
          title: () => <Text>1</Text>,
        }}
      />
      <Tab.Screen
        name={'2'}
        component={Q2}
        options={{
          title: () => <Text>2</Text>,
        }}
      />
      <Tab.Screen
        name={'3'}
        component={Q3}
        options={{
          title: () => <Text>3</Text>,
        }}
      />
      <Tab.Screen
        name={'4'}
        component={Q4}
        options={{
          title: () => <Text>4</Text>,
        }}
      />
    </Tab.Navigator>
  );
};

export default QuestionsTopTab;

const styles = StyleSheet.create({});
