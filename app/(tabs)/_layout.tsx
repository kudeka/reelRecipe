import { Tabs } from 'expo-router';

import TabIcon from '@/components/icons/TabIcons';


export default function TabLayout() {


  return (
    <Tabs>
      <Tabs.Screen name="index" 
      options={{
        title: 'Home',
        tabBarIcon: ({ color, size }) => <TabIcon name="home" color={color} size={size} />
      }}
      />

      <Tabs.Screen name="search" options={{
        title: 'Search',
        tabBarIcon: ({ color, size }) => <TabIcon name="search" color={color} size={size} />    
      }}/>

      <Tabs.Screen name="add" options={{
        title: 'Add',
        tabBarIcon: ({ color, size }) => <TabIcon name="add" color={color} size={size} />
      }}/>
      

      <Tabs.Screen name="favorites" options={{
        title: 'Saved',
        tabBarIcon: ({ color, size }) => <TabIcon name="saved" color={color} size={size} />
      }}/>

      <Tabs.Screen name="profile" options={{
        title: 'Profile',
        tabBarIcon: ({ color, size }) => <TabIcon name="profile" color={color} size={size} />
      }}/>
      
                      
    </Tabs>
  );
}


