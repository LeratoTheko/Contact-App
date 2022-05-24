import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import Contact from './Contact';
import { AntDesign, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useState  } from 'react';


export default function App() {
  const [picture, setPicture] = useState(require('./assets/e36.png'));

  const [Message, setMessage] = useState('');
  const [list, setList] = useState([])


  function transform(item) {
    return <Contact message = {item.Message} Picture = {item.picture} />
  }

  function addContact(){
    setList([{message: Message, picture: picture}, ...list])
    setMessage('')
    setPicture('')

  }

  return (
    <View style={styles.container}>
      <View style = {styles.Rectangle1}>

        <Text style = {{marginLeft: 20, fontWeight: 'bold', fontSize: 25, marginRight: 100}}>
          Facebook
        </Text>

        <TouchableOpacity>
          <View style = {{marginRight: 38}}>
            <Ionicons name="search-sharp" size={30} color="black" />
          </View>
        </TouchableOpacity>


        <TouchableOpacity>
          <View>
            <Ionicons name="menu" size={34} color="black" />
          </View>
        </TouchableOpacity>

      </View>
      <View style = {styles.Rectangle2}>


        <TouchableOpacity>
          <View style = {{marginLeft: 15, marginRight: 33}}>
            <Ionicons name="home" size={25} color="black" />
          </View>
        </TouchableOpacity>


        <TouchableOpacity>
          <View style = {{marginRight: 33}}>
            <Ionicons name="md-people-sharp" size={25} color="black" />
          </View>
        </TouchableOpacity>
        

        <TouchableOpacity>
          <View style = {{marginRight: 33}}>
            <AntDesign name="message1" size={25} color="black" />
          </View>
        </TouchableOpacity>


        <TouchableOpacity>
          <View style = {{marginRight: 33}}>
            <Ionicons name="notifications-sharp" size={25} color="black" />
          </View>
        </TouchableOpacity>


        <TouchableOpacity>
          <View style = {{marginRight: 33}}>
            <Ionicons name="videocam" size={25} color="black" />
          </View>
        </TouchableOpacity>


        <TouchableOpacity>
          <View style = {{marginRight: 15}}>
            <FontAwesome5 name="flag" size={25} color="black" />
          </View>
        </TouchableOpacity>

        
      </View>

      <View style = {styles.Rectangle3}>

        <View style = {{marginTop: 5, backgroundColor: '#EEEEEE', width: '100%', height: 90, alignItems: 'center', flexDirection: 'row'}}>
          <View style = {{marginLeft: 15}}>
            <Image style = {{height: 80, width: 80, borderRadius: '50%'}}
              source = {require('./assets/lepotjotjo.jpg')}
            />
          </View>

          <View style = {{flexDirection: 'column'}}>
            <Text style = {{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>Bastall Nthoana</Text>
            
            <View style = {{flexDirection: 'row'}}>
              <Text style = {{marginLeft: 20, fontWeight: 'bold', marginRight: 30}}>Apr 22</Text>
              <Ionicons name="earth-sharp" size={17} color="black" />
            </View>
          </View>
        </View>

        <View>
          <View style = {{marginBottom: 15, marginTop: 15, marginLeft: 15}}>
            <Text style = {{fontSize: 15, marginBottom: 15, fontFamily: 'ink free', fontWeight:'bold'}}>
              Whats in your mind ?
            </Text>
            <TextInput placeholder = 'Write something in your post...                    😘' style={styles.input} value = {Message} onChangeText = {setMessage} />
          </View>
        </View>

        <Contact Picture={picture} />
      </View>


      <View style = {styles.inputFields}>


        <View style = {{flexDirection: 'row', marginBottom: 10, borderRadius: 20, width: '100%', height: 50, backgroundColor: '#BDBDBD', alignItems: 'center'}}>

          <View style = {{marginRight: 110, marginLeft: 10}}>
            <TouchableOpacity>
              <AntDesign name = "edit" size = {25} color = "black" />
            </TouchableOpacity>
          </View>

          <View style = {{marginRight: 115}}>
            <TouchableOpacity>
              <AntDesign name="message1" size={25} color="black" />
            </TouchableOpacity>
          </View>


          <TouchableOpacity onPress =  {addContact}>
          <Ionicons name="send-sharp" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {list.map(item => transform(item))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BDBDBD',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputFields: {
    alignItems: 'flex-start',
    width: '100%',
    padding: 10,
    marginBottom: 15
  },
  input: {
    alignItems: 'center',
    borderWidth: 1,
    //marginLeft: 10,
    width: 300,
    height: 30,
    backgroundColor: '#BDBDBD'
  },

  Rectangle1: {
    alignItems: 'center',
    backgroundColor: '#303F9F',
    //borderRadius: 20,
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    height:50,
    width: '100%'
  },

  Rectangle2: {
    alignItems: 'center',
    backgroundColor: '#303F9F',
    //borderRadius: 20,
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    height: 50,
    width: '100%'
  },

  Rectangle3: {
    width: '95%',
    height: 445,
    backgroundColor: '#EEEEEE',
    marginTop: 5,
    borderRadius: 10
  },

  Small: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginLeft: 15,
    marginBottom: 10
  }
});

