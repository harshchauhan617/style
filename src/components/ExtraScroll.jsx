import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import React from 'react'
import { data, data1 } from '../Data/Data'

const ExtraScroll = () => {
    return (
        <View>
        <View style={{height:130, backgroundColor:"white",top:8,}}>
            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:15,}}>
            <Text style={{fontSize:17,fontWeight:"700"}}>Bills & Recharge</Text>
            <TouchableOpacity>
            <Text style={{color:"orange",fontSize:17,fontWeight:"700"}}>See All</Text>
            </TouchableOpacity>
            </View>
            <FlatList
            data={data1}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <TouchableOpacity style={styles.icon}>
                <Image
                    source={{ uri: item.Image }}
                    style={styles.image}
                />
                <Text style={{alignSelf:"center",textAlign:"center"}}>{item.title}</Text>
            </TouchableOpacity>}
        />
        </View>
        </View>

        
    )
}

export default ExtraScroll

const styles = StyleSheet.create({
    icon: {
        top: 8,
        marginHorizontal: 10,
        
        height: 80,
        width: 80,
        borderRadius: 70,
    },
    image: {
        height: "55%", width: "55%", borderRadius: 70,
        alignSelf:"center"
    }
})