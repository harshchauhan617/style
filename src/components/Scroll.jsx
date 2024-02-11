import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import React from 'react'
import { data, data1 } from '../Data/Data'

const Scroll = () => {
    return (
        <View>
            <View style={{height:90, backgroundColor:"white"}}>
            <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <TouchableOpacity style={styles.icon}>
                <Image
                    source={{ uri: item.Image }}
                    style={styles.image}
                />
                <Text style={{alignSelf:"center"}}>{item.title}</Text>
            </TouchableOpacity>}
        />
        </View>

        
        </View>

        
    )
}

export default Scroll

const styles = StyleSheet.create({
    icon: {
        top: 8,
        marginHorizontal: 10,
      justifyContent : "center",
      alignItems : "center",
        height: 80,
        width: 80,
        borderRadius: 70,
    },
    image: {
        height:50 , width: 50, borderRadius: 70,
    }
})