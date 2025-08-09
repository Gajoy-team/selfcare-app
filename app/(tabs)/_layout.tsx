import CustomTabBar from '@/src/components/CustomTabBar';
import colors from '@/src/styles/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Tabs } from 'expo-router';
import { House, List, MessagesSquare } from 'lucide-react-native';

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props: BottomTabBarProps) => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: 'transparent' },
      }}
    >
      <Tabs.Screen
        name="mood"
        options={{
          title: 'Mood',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="emoticon-happy-outline" size={35} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="hair-care"
        options={{
          title: 'Hair Care',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="hair-dryer-outline" size={35} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <House color={color} size={35} />,
        }}
      />

      <Tabs.Screen
        name="tasks"
        options={{
          title: 'Tasks',
          tabBarIcon: ({ color }) => <List color={color} size={35} />,
        }}
      />

      <Tabs.Screen
        name="messages"
        options={{
          title: 'Messages',
          tabBarIcon: ({ color }) => <MessagesSquare color={color} size={35} />,
        }}
      />
    </Tabs>
  );
}