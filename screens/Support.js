import React, { useRef } from 'react';
import { StyleSheet, Platform, StatusBar, SafeAreaView, Text, View, Image, Animated, TouchableOpacity, Linking, ImageBackground, Dimensions } from 'react-native';
import Colors from '../config/Colors';
import contactBanner from '../assets/images/contact-banner.png';
import phone from '../assets/images/contact-phone.png';
import email from '../assets/images/contact-email.png';
import Headertext from '../config/Headertext';
import backgroundImage from "../assets/images/background-main.jpg";

const LRView = (props) => {
    const LRanim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    React.useEffect(() => {
        Animated.timing(
            LRanim,
            {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }
        ).start();
    }, [LRanim])

    return (
        <Animated.View
            style={{
                ...props.style,
                opacity: LRanim,
            }}
        >
            {props.children}
        </Animated.View>
    );
}

export default Support = ({ navigation }) => {

    return (

        <SafeAreaView style={styles.container} behavior="height">
            {Platform.OS === 'ios' && <>
                <StatusBar barStyle="dark-content" hidden={false} translucent={true}></StatusBar>
            </>}
           <View style={styles.header}>
                <View style={styles.headerImage}>
                    <Image
                        style={styles.image}
                        source={contactBanner}
                    />
                </View>
           </View>

            <View style={styles.body}>
                <ImageBackground source={backgroundImage} style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.45)',
                    width: Dimensions.get("window").width,
                    height: Dimensions.get("window").height
                }}>
                <View style={styles.bodyEmail}>
                    
                    <View style={styles.cardEmail}>
                        <TouchableOpacity style={{flex: 1, flexDirection: 'row', alignItems: 'center'}} 
                            onPress={() => { Linking.openURL(`mailto:support@skyzer.co.nz`) }}>
                            <Text style={{ color: Colors.fontColorWhite, fontWeight: 'bold', fontSize: 17, marginLeft: 'auto', margin: 10}}>
                                support@skyzer.co.nz
                            </Text>
                        <Image
                            style={{ width: 50, height: 50, borderRadius: 10, marginLeft: 'auto', marginRight: 10}}
                            source={email}
                        />
                            </TouchableOpacity>
                    </View>
                    
                </View>
                <View style={styles.bodyPhone}>
                    <View style={styles.cardPhone}>
                        <TouchableOpacity style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
                            onPress={() => { Linking.openURL(`tel:092590322`) }}>
                            <Image
                                style={{ width: 50, height: 50, borderRadius: 10, marginRight: 'auto', marginLeft: 10}}
                                source={phone}
                            />
                            <Text style={{ color: Colors.fontColorWhite, fontWeight: 'bold', fontSize: 17, marginRight: 'auto', margin: 10 }}>
                                09 259 0322
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            </View>
            
            <LRView style={styles.footer}>
                <View style={{borderBottomWidth: 1, borderBottomColor: Colors.seperator, 
                    borderBottomRightRadius: 10, borderBottomLeftRadius: 10,}}>
                    <Text style={Headertext.h4}>
                        OPERATING HOURS
                    </Text>
                </View>
                <Text style={{fontSize: 17, fontWeight: 'bold', color: Colors.fontColorLightBlack}}>
                    MON - FRI
                </Text>
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: Colors.fontColorLightBlack }}>
                    8:00 AM - 5:00 PM
                </Text>
            </LRView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bodyColor,
    },
    header: {
        flex: 2,
        padding: 10,
    },
    headerImage: {
        flex: 1,
        margin: 10,
    },  
    image: {
        width: 360,
        height: 200,
        resizeMode: 'contain',
        borderRadius: 10,
    },  
    body: {
        flex: 3,
    },
    bodyEmail: {
        flex: 3,
    },
    cardEmail: {
        height: 70,
        backgroundColor: Colors.colorType3_2,
        marginTop: 50,
        marginBottom: 50,
        marginRight: 100,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    bodyPhone: {
        flex: 3,
    },
    cardPhone: {
        height: 70,
        backgroundColor: Colors.colorType3_2,
        marginBottom: 100,
        marginLeft: 100,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: Colors.contactCardColor,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 10,
        borderRadius: 10,
    },
});