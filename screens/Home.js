import * as React from "react";
import { View, Text, Button } from "react-native";

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Messages" onPress={()=>{navigation.navigate("Messages")

      }}></Button>

    </View>
  );
};

export default Home;
