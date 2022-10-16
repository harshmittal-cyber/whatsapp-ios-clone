import { View, Text, ImageBackground, FlatList, StyleSheet, KeyboardAvoidingView } from 'react-native'
import React, { useEffect } from 'react'
import bg from "../../assets/images/BG.png";
import Message from "../components/Message";
import messages from "../../assets/data/messages.json";
import InputBox from '../components/InputBox';
import { useRoute, useNavigation } from "@react-navigation/native"

const ChatScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ title: route.params.name });
    }, [route.params]);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" && "padding"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 90}
            style={styles.bg}
        >
            <ImageBackground source={bg} style={styles.bg}>
                <FlatList
                    data={messages}
                    renderItem={({ item }) => <Message message={item} />}
                    style={{ padding: 10 }}
                    inverted
                />
                <InputBox />
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
});

export default ChatScreen