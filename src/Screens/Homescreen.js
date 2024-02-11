import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import Scroll from '../components/Scroll';
import ExtraScroll from '../components/ExtraScroll';
import CardScroll from '../components/CardScroll';
import Register from '../components/Register';
import Offer from '../components/Offer';

const Homescreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.heading} >
                <View style={styles.icon}>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity  >
                            <Ionicons name="reorder-three" size={45} color="white" />
                        </TouchableOpacity>
                        <Text style={styles.logotxt}>Bajaj</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity style={{ padding: 7 }}>
                            <Fontisto name="bell" size={26} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ padding: 7 }}>
                            <Fontisto name="opencart" size={26} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.search}>
                    <Fontisto name="search" size={24} color="black" />
                    <TextInput
                        style={styles.srctxt}
                        placeholder='Search' />
                </View>
            </View>
            <View>
            <Scroll/>
            <CardScroll/>
            <ExtraScroll/>
            <Register/>
            <Offer/>
            </View>

        </SafeAreaView>
    )
}

export default Homescreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#F5F5F5"

    },
    heading: {
        height: 100,
        backgroundColor: 'darkblue',
        justifyContent: 'space-between'
    },
    icon: {
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logotxt: {
        padding: 10,
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },
    search: {
        flexDirection: "row",
        height: 40,
        width: "85%",
        padding: 10,
        paddingLeft: 10,
        alignSelf: "center",
        marginBottom: 25,
        borderRadius: 40,
        backgroundColor: "white"

    },
    srctxt: {
        paddingLeft: 10,
    }

})