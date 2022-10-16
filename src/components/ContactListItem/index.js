import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"

const ContactListItem = ({ user }) => {
    const navigation = useNavigation();

    return (
        <Pressable
            onPress={() => { }}
            style={styles.container}
        >
            <Image
                source={
                    { uri: user.image }
                }
                style={styles.image}
            />
            <View style={styles.content}>
                <Text style={styles.name} numberOfLines={1}>
                    {user.name}
                </Text>
                <Text numberOfLines={2} style={styles.subTitle}>
                    {user.status}
                </Text>
            </View>
        </Pressable >
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70,
        alignItems: "center"
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    name: {
        fontWeight: 'bold'
    },
    content: {

    },
    subTitle: {
        color: 'gray'
    }
})

export default ContactListItem