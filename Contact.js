
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'
import { useState  } from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function Contact({ message, Picture}) {

  const [count, setCount] = useState(0);

  function counting(){
    setCount(count + 1)
  }

  return (
    <View style={styles.container}>

      <View>
      <Text>
          {message}
        </Text>

        <Image style = {styles.image}
          source = {Picture}
        />

      <View style = {{flexDirection: 'row', alignItems: 'center'}}>
        <AntDesign name="like2" size={24} color="black" />
        <Text style = {{marginLeft: 15, fontSize: 20, fontWeight: 'bold'}}>{count}</Text>
      </View>
      <Button title = "Like" onPress={counting}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      //flex: 1,
      backgroundColor: '#EEEEEE',
      width: '100%',
      height: 220,
      borderRadius: 7,
      padding: 15,
      marginBottom: 5,
    },

    image: {
      width: '100%',
      height: 150,
      borderRadius:10,
      backgroundColor: '#FAFAFA',
      marginBottom: 10
    }
})
