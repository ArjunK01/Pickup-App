import { useScrollToTop } from "@react-navigation/native";
import React,{useEffect,useState} from "react";
import { View, Text, Button,FlatList, ScrollView,StyleSheet, ActivityIndicator} from "react-native";
import firebase from '../firebase/firebase'
import EventClickable from '../components/EventClickable'


const Home = ({navigation}) => {
  const [events, setEvents]= useState([])
  const [loading, setLoading]=useState(true)

  
  useEffect(()=>{
    const subscriber=firebase.firestore().collection('Events')
    .onSnapshot((querySnapshot)=>{
      const events=[]
      querySnapshot.forEach(documentSnapshot=>{
        events.push({...documentSnapshot.data(),key:documentSnapshot.id})
      })
      setEvents(events)
      setLoading(false)
    })
    return ()=>subscriber()
    
    

  },[])


  if(loading){
    return <ActivityIndicator/>
  }
  
  

  return (
    <View>
      


      <Button title="Messages" onPress={()=>{navigation.navigate("Messages")}}/>

      <FlatList
      data={events}
      renderItem={({ item }) => (
        <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <EventClickable name={item.eventName}/>
        </View>
      )}
    />
      

      

     
      
      

      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 60,
    borderColor: "blue",
    borderWidth: 2,
    alignItems: "center",
    backgroundColor: "red"
  },
  submitBtn: {
    display: "flex",
    backgroundColor: "black",
    width: "80%",
    color: "white",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 3,
    marginTop: 12
  },
  btnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 0.8
  },
  nameContainer: {
    justifyContent: "space-between",
    flexDirection: "row"
  },
  nameInput: {
    width: "48%"
  },
  input: {
    marginBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderRadius: 3,
    width: "80%",
    fontSize: 24
  }
});

export default Home;
