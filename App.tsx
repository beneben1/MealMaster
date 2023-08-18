import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/Login';
import { useEffect, useState } from 'react';
import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
import Home from './app/screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalorieCalculator from './app/screens/CalorieCalculator';
import Recipes from './app/screens/Recipes';
import SplashScreen from './app/screens/SplashScreen';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const auth=getAuth();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="CalorieCalculator" component={CalorieCalculator} />
      <Tab.Screen name="Recipes" component={Recipes} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true); 
  const [user, setUser] = useState<User | null>(null);
  

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);  
      }
    });
  
    return unsubscribe; // simulate 2 seconds loading
  }, [])

  if (isLoading) {
    return <SplashScreen/>;
  }

  return (
    <NavigationContainer>
      {user ? (
        <HomeTabs />
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
