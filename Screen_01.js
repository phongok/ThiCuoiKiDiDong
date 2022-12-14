import { StyleSheet, View, Button , Text} from 'react-native';
export default function  StartApp({ navigation }) {
    return (
      <View style={styles.container}>
       
          <Text style={{color:'white', fontWeight:'bold', fontSize:30}}>POWER BIKE SHOP</Text>
          <Button title='Get Stated'  color={"#bfbfbf"} style={{marginLeft:20}}  onPress={()=>{navigation.navigate('Home')}}></Button>
        
      </View>
    );
    }

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
    padding: '1%', 
   
    flex:1
  },
});
