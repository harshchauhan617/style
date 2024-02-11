import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const Register = () => {
  return (
    <View style={styles.contain}>
        <TouchableOpacity>
          <Image
          source={{uri:"https://static.vecteezy.com/system/resources/previews/019/932/254/non_2x/no-call-and-phone-line-icon-simple-outline-style-block-communication-business-concept-illustration-isolated-on-white-background-eps-10-vector.jpg"}}
          style={{height:40,width:40,borderRadius:40,marginRight:15}}
          />
        </TouchableOpacity>
      <Text style={{color:"white"}}>Register For Do Not Call Service</Text>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
    contain:{
        top:10,
        height:70,
        width:"96%",
        justifyContent:"center",
        alignSelf:"center",
        borderRadius:5,
        backgroundColor:"#00a3ba",
        flexDirection:"row",
        alignItems:"center"

    },
})