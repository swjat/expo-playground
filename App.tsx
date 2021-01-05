import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LoggerExample } from "./logger/LoggerExample";
import { loggerFactory } from "./logger/LoggerConfig";

const logUi = loggerFactory.getLogger("ui.App");

export default function App() {
    console.log("-----------------------------------------START");
    new LoggerExample().doSomeLogs();
    console.log("-----------------------------------------STOP");

    return (
        <View style={styles.container}>
            <Text>expo playground</Text>

            <TouchableOpacity onPress={() => console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")} style={styles.button}>
                <Text style={styles.buttonText}>log this</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => logUi.trace("BBBBBBBBBBBBBBBBBBBBBBBBB")} style={styles.button}>
                <Text style={styles.buttonText}>log this 2</Text>
            </TouchableOpacity>
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
    button: {
        backgroundColor: "green",
        padding: 10,
        borderRadius: 10,
        margin: 10,
    },
    buttonText: {
        fontSize: 20,
        color: "#fff",
    },
});
