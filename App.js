import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Screen_01 from './Screen_01'



const Stack = createNativeStackNavigator()

const App = () => {
    return (
        <Context>
            <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Screen_01' component={Screen_01} />
               
            </Stack.Navigator>
        </NavigationContainer>
        </Context>
    )
}

export default App