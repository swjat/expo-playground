import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LoggerExample } from "./logger/LoggerExample";

export default function App() {
    console.log("-----------------------------------------START");
    new LoggerExample().doSomeLogs();
    console.log("-----------------------------------------STOP");

    return (
        <View style={styles.container}>
            <Text>expo playground</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
