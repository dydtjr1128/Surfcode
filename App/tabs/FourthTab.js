import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default class SecondScreen extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <Text>Ths is tab 4</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
