import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { data2 } from '../Data/Data2'

const CardScroll = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
            <View style={styles.head}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 15 }}>
                    <Text style={{ fontSize: 17, fontWeight: "700" }} >
                        Bajaj Finance
                    </Text>
                    <Text style={{ fontWeight: '500' }}>
                        UPI ID : 6202482967@ybl
                    </Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.cardScroll}>
                        <FlatList
                            data={data2}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => <TouchableOpacity style={styles.card}>
                                <Image source={{ uri: item.Image }} style={{ height: 50, width: 50, borderRadius: 70, }} />
                                <Text style={{ alignSelf: "center", }}>{item.title}</Text>
                            </TouchableOpacity>}
                        />
                    </View>
                </ScrollView>
            </View>
            <View style={styles.head}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 15 }}>
                    <Text style={{ fontSize: 17, fontWeight: "700" }} >
                        Bajaj Finance
                    </Text>
                    <Text style={{ fontWeight: '500' }}>
                        UPI ID : 6202482967@ybl
                    </Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.cardScroll}>
                        <FlatList
                            data={data2}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => <TouchableOpacity style={styles.card}>
                                <Image source={{ uri: item.Image }} style={{ height: 50, width: 50, borderRadius: 70, }} />
                                <Text style={{ alignSelf: "center", }}>{item.title}</Text>
                            </TouchableOpacity>}
                        />
                    </View>
                </ScrollView>
            </View>

            <View style={styles.head}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 15 }}>
                    <Text style={{ fontSize: 17, fontWeight: "700" }} >
                        Bajaj Finance
                    </Text>
                    <Text style={{ fontWeight: '500' }}>
                        UPI ID : 6202482967@ybl
                    </Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.cardScroll}>
                        <FlatList
                            data={data2}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => <TouchableOpacity style={styles.card}>
                                <Image source={{ uri: item.Image }} style={{ height: 60, width: 60, borderRadius: 70, }} />
                                <Text style={{ alignSelf: "center", }}>{item.title}</Text>
                            </TouchableOpacity>}
                        />
                    </View>
                </ScrollView>
            </View>
            </ScrollView>
        </View>
    )
}

export default CardScroll

const styles = StyleSheet.create({
    container: {
        height: 160,
        backgroundColor: "red"
    },

    card: {
        width: 80,
        height: 100,
        top: 18,
        marginLeft: 6,
        borderRadius: 70,
    },
    head: {
        borderRadius: 30,
        marginVertical: 10,
        marginLeft: 10,
        padding: 10,
        backgroundColor: 'gray',
        height: 140,
        width: "90%",
        borderRadius: 18,
    },
    cardScroll: {
    }
})