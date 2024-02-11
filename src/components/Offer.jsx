import { StyleSheet, Text, View, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

const Offer = () => {
    return (
        <View style={{flexDirection:"row"}}>
            <ScrollView >
                <View style={styles.container}>
                    <TouchableOpacity>
                        <ImageBackground
                            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6lSHh9kdLFh2wU3wu34WdcEXNBjYQugahlXoTwLFqezDubJa4FTF631aSZ8Mq-Tz3A4&usqp=CAU" }}
                            style={{ height: "100%", width: "100%",borderRadius:10 }}

                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity>
                        <ImageBackground
                            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6lSHh9kdLFh2wU3wu34WdcEXNBjYQugahlXoTwLFqezDubJa4FTF631aSZ8Mq-Tz3A4&usqp=CAU" }}
                            style={{ height: "100%", width: "100%",borderRadius:10 }}

                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.container}>
                    <TouchableOpacity>
                        <ImageBackground
                            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6lSHh9kdLFh2wU3wu34WdcEXNBjYQugahlXoTwLFqezDubJa4FTF631aSZ8Mq-Tz3A4&usqp=CAU" }}
                            style={{ height: "100%", width: "100%",borderRadius:10 }}

                        />
                    </TouchableOpacity>
                </View>


            </ScrollView>
        </View>
    )
}

export default Offer

const styles = StyleSheet.create({
    container: {
        borderRadius:10,
        height: 130,
        width: "90%",
        alignSelf: "center",
        top: 20,
        
    }
})