import React, { useRef } from 'react';
import { ImageBackground, Animated, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import backgroundImage from "../assets/images/background.jpg";
import Colors from '../config/Colors';
import Headertext from '../config/Headertext';
import { Restart } from 'fiction-expo-restart';
import NoInternetConnectionImage from '../assets/images/no-internet.png';
import TopStatusBar from '../components/TopStatusBar';

const NoInternet = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }
        ).start();
    }, [fadeAnim])

    return (
        <Animated.View
            style={{
                ...props.style,
                opacity: fadeAnim,
            }}
        >
            {props.children}
        </Animated.View>
    );
}

export default Loading = () => {

    return (
        <ImageBackground source={backgroundImage} resizeMode="cover" style={{
            flex: 1,
            justifyContent: "center"
        }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TopStatusBar />
                <Image
                    style={styles.logo}
                    source={NoInternetConnectionImage}
                />

                <Text style={[Headertext.h1, { color: Colors.fontColorBluest, marginTop: 20 }]}>
                    NO INTERNET
                </Text>

                <TouchableOpacity onPress={() => Restart()} style={styles.loginButton}>
                    <Text style={[Headertext.h3, { color: Colors.buttonFont }]}>RETRY</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 300,
        height: 200,
        resizeMode: 'center'
    },
    loginButton: {
        marginTop: 20,
        backgroundColor: Colors.buttonBody,
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
    },
});